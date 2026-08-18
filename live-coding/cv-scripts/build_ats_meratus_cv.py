from __future__ import annotations

import copy
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
XML = "http://www.w3.org/XML/1998/namespace"
PKG_REL = "http://schemas.openxmlformats.org/package/2006/relationships"
CONTENT_TYPES = "http://schemas.openxmlformats.org/package/2006/content-types"

NS = {
    "wpc": "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
    "mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "o": "urn:schemas-microsoft-com:office:office",
    "r": R,
    "m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
    "v": "urn:schemas-microsoft-com:vml",
    "wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "w10": "urn:schemas-microsoft-com:office:word",
    "w": W,
    "w14": "http://schemas.microsoft.com/office/word/2010/wordml",
    "w15": "http://schemas.microsoft.com/office/word/2012/wordml",
    "wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
    "wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
    "wne": "http://schemas.microsoft.com/office/word/2006/wordml",
    "wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
}

for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)
ET.register_namespace("", PKG_REL)


def qn(name: str) -> str:
    prefix, local = name.split(":")
    return f"{{{NS[prefix]}}}{local}"


def e(name: str, attrs: dict[str, str] | None = None, text: str | None = None) -> ET.Element:
    node = ET.Element(qn(name), attrs or {})
    if text is not None:
        node.text = text
    return node


def rpr(
    *,
    size: int = 18,
    bold: bool = False,
    italic: bool = False,
    color: str = "000000",
    underline: bool = False,
) -> ET.Element:
    pr = e("w:rPr")
    pr.append(
        e(
            "w:rFonts",
            {
                qn("w:ascii"): "Calibri",
                qn("w:hAnsi"): "Calibri",
                qn("w:eastAsia"): "Calibri",
                qn("w:cs"): "Calibri",
            },
        )
    )
    if bold:
        pr.append(e("w:b"))
        pr.append(e("w:bCs"))
    if italic:
        pr.append(e("w:i"))
        pr.append(e("w:iCs"))
    pr.append(e("w:color", {qn("w:val"): color}))
    pr.append(e("w:sz", {qn("w:val"): str(size)}))
    pr.append(e("w:szCs", {qn("w:val"): str(size)}))
    if underline:
        pr.append(e("w:u", {qn("w:val"): "single"}))
    return pr


def run(
    text: str,
    *,
    size: int = 18,
    bold: bool = False,
    italic: bool = False,
    color: str = "000000",
    underline: bool = False,
) -> ET.Element:
    item = e("w:r")
    item.append(rpr(size=size, bold=bold, italic=italic, color=color, underline=underline))
    text_node = e("w:t")
    text_node.set(f"{{{XML}}}space", "preserve")
    text_node.text = text
    item.append(text_node)
    return item


def paragraph(
    parts: list[ET.Element] | str,
    *,
    style: str | None = None,
    before: int = 0,
    after: int = 24,
    line: int = 220,
    size: int = 18,
    bold: bool = False,
    italic: bool = False,
    justify: str | None = None,
    right_tab: bool = False,
    keep_next: bool = False,
    border_bottom: bool = False,
    bullet: bool = False,
) -> ET.Element:
    item = e("w:p")
    ppr = e("w:pPr")
    if style:
        ppr.append(e("w:pStyle", {qn("w:val"): style}))
    if keep_next:
        ppr.append(e("w:keepNext"))
    if border_bottom:
        pbdr = e("w:pBdr")
        pbdr.append(
            e(
                "w:bottom",
                {
                    qn("w:val"): "single",
                    qn("w:color"): "000000",
                    qn("w:sz"): "6",
                    qn("w:space"): "3",
                },
            )
        )
        ppr.append(pbdr)
    if right_tab:
        tabs = e("w:tabs")
        tabs.append(e("w:tab", {qn("w:val"): "right", qn("w:pos"): "10460"}))
        ppr.append(tabs)
    if bullet:
        num_pr = e("w:numPr")
        num_pr.append(e("w:ilvl", {qn("w:val"): "0"}))
        num_pr.append(e("w:numId", {qn("w:val"): "1"}))
        ppr.append(num_pr)
        ppr.append(e("w:ind", {qn("w:left"): "360", qn("w:hanging"): "180"}))
    ppr.append(
        e(
            "w:spacing",
            {
                qn("w:before"): str(before),
                qn("w:after"): str(after),
                qn("w:line"): str(line),
                qn("w:lineRule"): "auto",
            },
        )
    )
    if justify:
        ppr.append(e("w:jc", {qn("w:val"): justify}))
    item.append(ppr)
    if isinstance(parts, str):
        item.append(run(parts, size=size, bold=bold, italic=italic))
    else:
        for part in parts:
            item.append(part)
    return item


def hyperlink(rel_id: str, text: str, *, size: int = 17) -> ET.Element:
    link = e("w:hyperlink", {qn("r:id"): rel_id, qn("w:history"): "1"})
    link.append(run(text, size=size, color="1155CC", underline=True))
    return link


def image_paragraph(rel_id: str) -> ET.Element:
    width = 914400
    height = 1371600
    drawing_run = e("w:r")
    drawing = e("w:drawing")
    inline = e("wp:inline", {"distT": "0", "distB": "0", "distL": "0", "distR": "0"})
    inline.append(e("wp:extent", {"cx": str(width), "cy": str(height)}))
    inline.append(e("wp:effectExtent", {"l": "0", "t": "0", "r": "0", "b": "0"}))
    inline.append(e("wp:docPr", {"id": "1", "name": "Profile Photo", "descr": "Sakti Mujahid Imani"}))
    frame_pr = e("wp:cNvGraphicFramePr")
    frame_pr.append(e("a:graphicFrameLocks", {"noChangeAspect": "1"}))
    inline.append(frame_pr)

    graphic = e("a:graphic")
    graphic_data = e("a:graphicData", {"uri": "http://schemas.openxmlformats.org/drawingml/2006/picture"})
    pic = e("pic:pic")

    nv_pic_pr = e("pic:nvPicPr")
    nv_pic_pr.append(e("pic:cNvPr", {"id": "0", "name": "profile-merah.png", "descr": "Profile photo"}))
    c_nv_pic_pr = e("pic:cNvPicPr")
    c_nv_pic_pr.append(e("a:picLocks", {"noChangeAspect": "1"}))
    nv_pic_pr.append(c_nv_pic_pr)
    pic.append(nv_pic_pr)

    blip_fill = e("pic:blipFill")
    blip_fill.append(e("a:blip", {qn("r:embed"): rel_id}))
    stretch = e("a:stretch")
    stretch.append(e("a:fillRect"))
    blip_fill.append(stretch)
    pic.append(blip_fill)

    sp_pr = e("pic:spPr")
    xfrm = e("a:xfrm")
    xfrm.append(e("a:off", {"x": "0", "y": "0"}))
    xfrm.append(e("a:ext", {"cx": str(width), "cy": str(height)}))
    sp_pr.append(xfrm)
    geom = e("a:prstGeom", {"prst": "rect"})
    geom.append(e("a:avLst"))
    sp_pr.append(geom)
    pic.append(sp_pr)

    graphic_data.append(pic)
    graphic.append(graphic_data)
    inline.append(graphic)
    drawing.append(inline)
    drawing_run.append(drawing)
    return paragraph([drawing_run], after=18, justify="center")


def title(text: str) -> ET.Element:
    return paragraph(text.upper(), style="Title", after=4, size=30, bold=True, justify="center")


def subtitle(text: str) -> ET.Element:
    return paragraph(text, after=10, size=18, bold=True, justify="center")


def section(text: str, *, before: int = 78) -> ET.Element:
    return paragraph(
        text.upper(),
        style="Heading1",
        before=before,
        after=34,
        size=19,
        bold=True,
        border_bottom=True,
        keep_next=True,
    )


def entry(left: str, right: str, *, before: int = 38) -> ET.Element:
    return paragraph(
        [run(left, size=18, bold=True), run("\t" + right, size=18, bold=True)],
        before=before,
        after=2,
        right_tab=True,
        keep_next=True,
    )


def role(text: str) -> ET.Element:
    return paragraph(text, after=12, size=17, italic=True, keep_next=True)


def bullet(text: str) -> ET.Element:
    return paragraph(text, after=8, size=17, line=216, justify="both", bullet=True)


def bullet_parts(parts: list[ET.Element]) -> ET.Element:
    return paragraph(parts, after=8, size=17, line=216, justify="both", bullet=True)


def labeled_line(label: str, text: str) -> ET.Element:
    return paragraph(
        [run(label + ": ", size=17, bold=True), run(text, size=17)],
        after=10,
        line=216,
        justify="both",
    )


def set_numbering(numbering_xml: bytes) -> bytes:
    root = ET.fromstring(numbering_xml)
    ignorable = qn("mc:Ignorable")
    if ignorable in root.attrib:
        root.set(ignorable, "w15")
    for lvl in root.findall(".//w:lvl[@w:ilvl='0']", {"w": W}):
        lvl_text = lvl.find("w:lvlText", {"w": W})
        if lvl_text is not None:
            lvl_text.set(qn("w:val"), "\u2022")
        ppr = lvl.find("w:pPr", {"w": W})
        if ppr is None:
            ppr = e("w:pPr")
            lvl.append(ppr)
        ind = ppr.find("w:ind", {"w": W})
        if ind is None:
            ind = e("w:ind")
            ppr.append(ind)
        ind.set(qn("w:left"), "360")
        ind.set(qn("w:hanging"), "180")
        rpr_node = lvl.find("w:rPr", {"w": W})
        if rpr_node is None:
            rpr_node = e("w:rPr")
            lvl.append(rpr_node)
        fonts = rpr_node.find("w:rFonts", {"w": W})
        if fonts is None:
            fonts = e("w:rFonts")
            rpr_node.append(fonts)
        for attr in (qn("w:ascii"), qn("w:hAnsi"), qn("w:cs")):
            fonts.set(attr, "Calibri")
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def set_relationships(rels_xml: bytes) -> bytes:
    root = ET.fromstring(rels_xml)
    for rel in list(root):
        rel_type = rel.get("Type", "")
        if rel_type.endswith("/hyperlink") or rel_type.endswith("/image"):
            root.remove(rel)

    relationships = {
        "rIdEmailSakti": ("hyperlink", "mailto:saktimujahid.9b@gmail.com", "External"),
        "rIdLinkedInSakti": ("hyperlink", "https://www.linkedin.com/in/saktimujahid/", "External"),
        "rIdThesisRepo": ("hyperlink", "https://repo.itera.ac.id/depan/submission/SB2606220028", "External"),
        "rIdCertFolder": (
            "hyperlink",
            "https://drive.google.com/drive/folders/1w98oD8nKDvd_EydIhdku-owZlNbq6pgZ?usp=drive_link",
            "External",
        ),
        "rIdProfileMerah": ("image", "media/profile-merah.png", None),
    }
    type_prefix = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
    for rel_id, (kind, target, mode) in relationships.items():
        attrs = {"Id": rel_id, "Type": f"{type_prefix}/{kind}", "Target": target}
        if mode:
            attrs["TargetMode"] = mode
        ET.SubElement(root, f"{{{PKG_REL}}}Relationship", attrs)
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def set_content_types(content_xml: bytes) -> bytes:
    root = ET.fromstring(content_xml)
    default_exists = any(
        child.tag == f"{{{CONTENT_TYPES}}}Default" and child.get("Extension", "").lower() == "png"
        for child in root
    )
    if not default_exists:
        root.insert(
            0,
            ET.Element(f"{{{CONTENT_TYPES}}}Default", {"Extension": "png", "ContentType": "image/png"}),
        )
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def normalize_section_properties(sect_pr: ET.Element) -> ET.Element:
    sect_pr = copy.deepcopy(sect_pr)
    pg_sz = sect_pr.find("w:pgSz", {"w": W})
    if pg_sz is None:
        pg_sz = e("w:pgSz")
        sect_pr.insert(0, pg_sz)
    pg_sz.set(qn("w:w"), "11907")
    pg_sz.set(qn("w:h"), "16840")
    pg_sz.set(qn("w:orient"), "portrait")

    pg_mar = sect_pr.find("w:pgMar", {"w": W})
    if pg_mar is None:
        pg_mar = e("w:pgMar")
        sect_pr.insert(1, pg_mar)
    for attr, value in {
        "top": "560",
        "right": "690",
        "bottom": "560",
        "left": "690",
        "header": "420",
        "footer": "420",
        "gutter": "0",
    }.items():
        pg_mar.set(qn(f"w:{attr}"), value)
    return sect_pr


def id_content() -> list[ET.Element]:
    contact = paragraph(
        [
            run("Jakarta, Indonesia  |  ", size=17),
            hyperlink("rIdEmailSakti", "saktimujahid.9b@gmail.com", size=17),
            run("  |  081298056550  |  ", size=17),
            hyperlink("rIdLinkedInSakti", "linkedin.com/in/saktimujahid", size=17),
        ],
        after=34,
        justify="center",
    )

    profile_text = (
        "Lulusan Teknik Informatika Institut Teknologi Sumatera (IPK 3.56/4.00, Cumlaude) "
        "dengan pengalaman membangun sistem web institusi, mengolah data, dan mendukung koordinasi proyek. "
        "Berpengalaman menggunakan React, Laravel, MySQL, Python, dan machine learning, termasuk sistem "
        "persuratan yang mempercepat proses dari 7-10 hari menjadi 2-5 hari kerja dengan Black Box Testing "
        "100% dan UAT 88.57%. Tertarik berkontribusi di Meratus melalui solusi digital, otomasi proses, "
        "analisis data, dan dokumentasi yang mendukung efisiensi operasional."
    )

    return [
        image_paragraph("rIdProfileMerah"),
        title("Sakti Mujahid Imani"),
        subtitle("Fresh Graduate Teknik Informatika | Web Development | Data & Project Coordination"),
        contact,
        section("Profil", before=42),
        paragraph(profile_text, after=32, size=18, line=220, justify="both"),
        section("Pendidikan", before=62),
        entry("Institut Teknologi Sumatera - Lampung Selatan, Indonesia", "2022 - 2026", before=28),
        role("S1 Teknik Informatika, IPK 3.56/4.00 - Lulus dengan Predikat Pujian (Cumlaude)"),
        bullet('Skripsi: "Pengembangan Subsistem Kemahasiswaan pada Web Harmony FTI ITERA Menggunakan Metode RUP dengan Tools Kanban."'),
        bullet_parts([run("URI: ", size=17, bold=True), hyperlink("rIdThesisRepo", "repo.itera.ac.id/depan/submission/SB2606220028", size=17)]),
        section("Pengalaman Kerja dan Program", before=68),
        entry("Fakultas Teknologi Industri ITERA - Lampung Selatan, Indonesia", "2025 - 2026", before=28),
        role("Full Stack Developer, Website Harmony FTI (Magang / MBKM)"),
        bullet("Mengembangkan subsistem administrasi persuratan kampus berbasis React, Laravel, dan MySQL dengan metodologi RUP dan pengelolaan tugas Kanban."),
        bullet("Mempercepat proses persuratan dari 7-10 hari kerja menjadi 2-5 hari kerja, dengan hasil Black Box Testing 100% dan UAT 88.57% (Sangat Baik)."),
        entry("Dinas Kominfo Kota Bandar Lampung - Bandar Lampung, Indonesia", "2025", before=36),
        role("Web Developer & Staf Bidang Persandian, Keamanan Informasi dan Siber"),
        bullet("Berkontribusi pada 2 sistem pemerintahan digital, SIMAS dan SIMAMANG, untuk validasi surat, rekapitulasi data, pendaftaran magang, unggah dokumen, dan pelacakan status."),
        bullet("Menerjemahkan kebutuhan pengguna internal menjadi alur sistem dan dokumentasi progres agar koordinasi dengan supervisor lebih tertata."),
        entry("DBS Foundation x Dicoding - Indonesia", "2025", before=36),
        role("Machine Learning Engineer Cohort, Coding Camp 2025 (Studi Independen / MBKM)"),
        bullet("Menyelesaikan jalur pembelajaran Machine Learning Engineer dan menghasilkan 1 produk computer vision berorientasi aksesibilitas melalui proyek CashEye."),
        bullet("Mengerjakan submission berbasis Python, data analysis, machine learning, deep learning fundamentals, MLOps, dokumentasi teknis, dan evaluasi model."),
        entry("Institut Teknologi Sumatera - Lampung Selatan, Indonesia", "2023 - 2025", before=36),
        role("Asisten Akademik / Asisten Praktikum / Koordinator Asisten"),
        bullet("Menangani 17 penugasan asisten dan koordinator asisten pada 10+ mata kuliah/praktikum, termasuk Fisika Dasar, PKS, DRPL, Kewirausahaan, TBFO, dan MRV."),
        bullet("Mengelola jadwal, pembagian tugas, rekap nilai, evaluasi mahasiswa, dan dokumentasi akademik bersama dosen, laboran, serta tim asisten."),
        section("Pengalaman Organisasi dan Kepemimpinan", before=68),
        entry("Himpunan Mahasiswa Informatika (HMIF) ITERA", "2024 - 2025", before=28),
        role("Staf Ahli Pengembangan Anggota; Staf Pengembangan dan Pelatihan Keprofesian; Pemateri MBKM"),
        bullet("Menjalankan 3 peran organisasi dalam pengembangan anggota, pelatihan keprofesian, dan sharing session MBKM untuk mendukung kesiapan akademik serta karier mahasiswa Informatika."),
        bullet("Mendukung perencanaan kegiatan, penyusunan materi, komunikasi antaranggota, dokumentasi program, dan pelaksanaan acara secara kolaboratif."),
        section("Proyek Pilihan", before=68),
        entry("Web Harmony - Subsistem Persuratan Kampus", "React, Laravel, MySQL", before=28),
        bullet("Membangun workflow persuratan kemahasiswaan yang memangkas proses dari 7-10 hari menjadi 2-5 hari kerja, tervalidasi Black Box Testing 100% dan UAT 88.57%."),
        entry("SIMAS dan SIMAMANG - Sistem Pemerintahan Digital", "Laravel, Inertia.js, React.js", before=34),
        bullet("Mendukung 2 aplikasi instansi untuk digitalisasi validasi surat, rekapitulasi data, pendaftaran magang, unggah dokumen, dan pelacakan status pendaftaran."),
        entry("End-to-End ETL Pipeline", "Python, Pytest, PostgreSQL", before=34),
        bullet("Mengekstrak 50 halaman web, mentransformasi data, dan memuat hasil ke 3 tujuan: CSV, Google Sheets API, dan PostgreSQL, dengan pengujian Pytest."),
        entry('Analisis Sentimen "Access by KAI"', "Python, TF-IDF, XGBoost", before=34),
        bullet("Membandingkan 3 model klasifikasi sentimen; XGBoost menghasilkan performa terbaik dengan akurasi 97%."),
        entry("Afenter_PCD - Deteksi Area Parkir Motor", "Python, Streamlit, OpenCV", before=34),
        bullet("Membangun aplikasi computer vision dengan 11 tahap pengolahan citra untuk menganalisis ketersediaan slot parkir motor dari dataset maupun unggahan pengguna."),
        entry("Sistem Rekomendasi Buku", "Python, TF-IDF, Cosine Similarity", before=34),
        bullet("Membandingkan Content-Based Filtering dan Collaborative Filtering pada dataset Book-Crossing 1 juta+ baris; Precision@5 meningkat dari 0.04 menjadi 0.42."),
        entry("Prediksi Biaya Asuransi Medis", "Python, Regression, GridSearchCV", before=34),
        bullet("Membandingkan Regresi Linier dan Decision Tree; Regresi Linier mencapai MSE 33.596.915, lebih baik dibanding Decision Tree dengan MSE 40.153.988."),
        entry("Kyuubi-MML - Multimodal Music Emotion Recognition", "PyTorch, DeBERTa, PANN", before=34),
        bullet("Mengklasifikasikan emosi musik ke 5 klaster melalui 3 modalitas, yaitu audio, lirik, dan MIDI, menggunakan pendekatan late fusion."),
        entry("Dashboard Analisis Penyewaan Sepeda", "Pandas, Streamlit, Seaborn", before=34),
        bullet("Menganalisis dataset Bike Sharing Washington D.C. 2011-2012 dan membangun dashboard interaktif dengan filter tanggal, cuaca, dan musim."),
        section("Keterampilan dan Pencapaian", before=68),
        labeled_line("Teknis", "React.js, Laravel, Inertia.js, RESTful API, MySQL, SQL, JavaScript, PHP, Python, Git, CI/CD automation, Docker."),
        labeled_line("Data dan Machine Learning", "Pandas, Scikit-learn, TensorFlow, OpenCV, TF-IDF, XGBoost, MLflow, Pytest, Streamlit, data visualization."),
        labeled_line("Profesional", "Requirements gathering, technical documentation, stakeholder communication, progress tracking, UAT support, black-box testing, Kanban, teamwork."),
        labeled_line("Sertifikasi", "30+ sertifikat pelatihan bidang machine learning, data analysis, SQL, version control, project management, back-end JavaScript, cloud, AI, dan prompt engineering."),
        paragraph([run("Folder sertifikat: ", size=17, bold=True), hyperlink("rIdCertFolder", "drive.google.com/drive/folders/sertifikat", size=17)], after=10, line=216),
        labeled_line("Pencapaian", 'Lulus Cumlaude ITERA (2026); penerima PHMW 2024 untuk proposal "Burger Dengan Bun Dari Mie Ramen".'),
        section("Bahasa", before=62),
        paragraph([run("Bahasa Indonesia: ", size=17, bold=True), run("Native. ", size=17), run("English: ", size=17, bold=True), run("Limited Working Proficiency.", size=17)], after=8, line=216),
    ]


def en_content() -> list[ET.Element]:
    contact = paragraph(
        [
            run("Jakarta, Indonesia  |  ", size=17),
            hyperlink("rIdEmailSakti", "saktimujahid.9b@gmail.com", size=17),
            run("  |  081298056550  |  ", size=17),
            hyperlink("rIdLinkedInSakti", "linkedin.com/in/saktimujahid", size=17),
        ],
        after=34,
        justify="center",
    )

    profile_text = (
        "Recent Informatics Engineering graduate from Institut Teknologi Sumatera (GPA 3.56/4.00, Cumlaude) "
        "with hands-on experience in institutional web systems, data processing, and project coordination. "
        "Skilled in React, Laravel, MySQL, Python, and machine learning, including a correspondence system "
        "that reduced processing time from 7-10 business days to 2-5 business days with 100% Black Box Testing "
        "and 88.57% UAT results. Interested in contributing to Meratus through digital solutions, process "
        "automation, data analysis, and structured documentation that support operational efficiency."
    )

    return [
        image_paragraph("rIdProfileMerah"),
        title("Sakti Mujahid Imani"),
        subtitle("Fresh Graduate in Informatics Engineering | Web Development | Data & Project Coordination"),
        contact,
        section("Profile", before=42),
        paragraph(profile_text, after=32, size=18, line=220, justify="both"),
        section("Education", before=62),
        entry("Institut Teknologi Sumatera - South Lampung, Indonesia", "2022 - 2026", before=28),
        role("Bachelor of Informatics Engineering, GPA 3.56/4.00 - Graduated Cum Laude"),
        bullet('Thesis: "Development of the Student Affairs Subsystem on the Harmony FTI ITERA Website Using the RUP Method with Kanban Tools."'),
        bullet_parts([run("URI: ", size=17, bold=True), hyperlink("rIdThesisRepo", "repo.itera.ac.id/depan/submission/SB2606220028", size=17)]),
        section("Work and Program Experience", before=68),
        entry("Faculty of Industrial Technology, ITERA - South Lampung, Indonesia", "2025 - 2026", before=28),
        role("Full Stack Developer, Harmony FTI Website (Internship / MBKM)"),
        bullet("Developed a campus correspondence administration subsystem using React, Laravel, and MySQL with RUP methodology and Kanban-based task tracking."),
        bullet("Reduced correspondence processing time from 7-10 business days to 2-5 business days, with 100% Black Box Testing and 88.57% UAT results."),
        entry("Department of Communication and Informatics, Bandar Lampung City", "2025", before=36),
        role("Web Developer & Information Security/Cybersecurity Staff"),
        bullet("Contributed to 2 government digital systems, SIMAS and SIMAMANG, covering letter validation, data recapitulation, internship registration, document upload, and status tracking."),
        bullet("Translated internal user needs into system workflows and progress documentation to improve coordination with supervisors and stakeholders."),
        entry("DBS Foundation x Dicoding - Indonesia", "2025", before=36),
        role("Machine Learning Engineer Cohort, Coding Camp 2025 (Independent Study / MBKM)"),
        bullet("Completed the Machine Learning Engineer learning track and delivered 1 accessibility-oriented computer vision product through the CashEye project."),
        bullet("Worked on Python, data analysis, machine learning, deep learning fundamentals, MLOps, technical documentation, and model evaluation submissions."),
        entry("Institut Teknologi Sumatera - South Lampung, Indonesia", "2023 - 2025", before=36),
        role("Academic Assistant / Laboratory Assistant / Assistant Coordinator"),
        bullet("Handled 17 assistant and coordinator assignments across 10+ courses/practicums, including Basic Physics, Computer and Software Introduction, Software Engineering, Entrepreneurship, TBFO, and MRV."),
        bullet("Managed schedules, task allocation, grade recaps, student evaluation, and academic documentation with lecturers, laboratory staff, and assistant teams."),
        section("Organization and Leadership Experience", before=68),
        entry("Informatics Student Association (HMIF) ITERA", "2024 - 2025", before=28),
        role("Member Development Expert Staff; Professional Training Staff; MBKM Sharing Session Speaker"),
        bullet("Held 3 organizational roles in member development, professional training, and MBKM knowledge-sharing to support Informatics students' academic and career readiness."),
        bullet("Supported activity planning, material preparation, member communication, program documentation, and collaborative event execution."),
        section("Selected Projects", before=68),
        entry("Web Harmony - Campus Correspondence Subsystem", "React, Laravel, MySQL", before=28),
        bullet("Built a student affairs correspondence workflow that reduced processing time from 7-10 days to 2-5 days, validated by 100% Black Box Testing and 88.57% UAT."),
        entry("SIMAS and SIMAMANG - Government Digital Systems", "Laravel, Inertia.js, React.js", before=34),
        bullet("Supported 2 government applications for letter validation, data recapitulation, internship registration, document upload, and registration status tracking."),
        entry("End-to-End ETL Pipeline", "Python, Pytest, PostgreSQL", before=34),
        bullet("Extracted 50 web pages, transformed the data, and loaded outputs into 3 destinations: CSV, Google Sheets API, and PostgreSQL, with Pytest-based validation."),
        entry('"Access by KAI" Sentiment Analysis', "Python, TF-IDF, XGBoost", before=34),
        bullet("Compared 3 sentiment classification models; XGBoost achieved the best performance with 97% accuracy."),
        entry("Afenter_PCD - Motorcycle Parking Area Detection", "Python, Streamlit, OpenCV", before=34),
        bullet("Built a computer vision app with 11 image-processing stages to analyze motorcycle parking slot availability from datasets and user-uploaded images."),
        entry("Book Recommendation System", "Python, TF-IDF, Cosine Similarity", before=34),
        bullet("Compared Content-Based Filtering and Collaborative Filtering on the 1M+ row Book-Crossing dataset; Precision@5 improved from 0.04 to 0.42."),
        entry("Medical Insurance Cost Prediction", "Python, Regression, GridSearchCV", before=34),
        bullet("Compared Linear Regression and Decision Tree models; Linear Regression reached an MSE of 33,596,915, outperforming Decision Tree at 40,153,988."),
        entry("Kyuubi-MML - Multimodal Music Emotion Recognition", "PyTorch, DeBERTa, PANN", before=34),
        bullet("Classified music emotion into 5 clusters using 3 modalities, audio, lyrics, and MIDI, through a late fusion approach."),
        entry("Bike Sharing Analysis Dashboard", "Pandas, Streamlit, Seaborn", before=34),
        bullet("Analyzed the 2011-2012 Washington D.C. Bike Sharing dataset and built an interactive dashboard with date, weather, and season filters."),
        section("Skills and Achievements", before=68),
        labeled_line("Technical", "React.js, Laravel, Inertia.js, RESTful API, MySQL, SQL, JavaScript, PHP, Python, Git, CI/CD automation, Docker."),
        labeled_line("Data and Machine Learning", "Pandas, Scikit-learn, TensorFlow, OpenCV, TF-IDF, XGBoost, MLflow, Pytest, Streamlit, data visualization."),
        labeled_line("Professional", "Requirements gathering, technical documentation, stakeholder communication, progress tracking, UAT support, black-box testing, Kanban, teamwork."),
        labeled_line("Certifications", "30+ training certificates in machine learning, data analysis, SQL, version control, project management, back-end JavaScript, cloud, AI, and prompt engineering."),
        paragraph([run("Certificate folder: ", size=17, bold=True), hyperlink("rIdCertFolder", "drive.google.com/drive/folders/certificates", size=17)], after=10, line=216),
        labeled_line("Achievements", 'Graduated Cum Laude from ITERA (2026); recipient of PHMW 2024 funding for the proposal "Burger With Ramen Noodle Bun".'),
        section("Languages", before=62),
        paragraph([run("Indonesian: ", size=17, bold=True), run("Native. ", size=17), run("English: ", size=17, bold=True), run("Limited Working Proficiency.", size=17)], after=8, line=216),
    ]


def build_document(template: Path, output: Path, photo: Path, language: str) -> None:
    content = id_content() if language == "id" else en_content()
    with zipfile.ZipFile(template, "r") as zin:
        root = ET.fromstring(zin.read("word/document.xml"))
        ignorable = qn("mc:Ignorable")
        if ignorable in root.attrib:
            del root.attrib[ignorable]
        body = root.find("w:body", {"w": W})
        if body is None:
            raise RuntimeError("Missing Word document body")
        sect_pr = body.find("w:sectPr", {"w": W})
        sect_pr_copy = normalize_section_properties(sect_pr) if sect_pr is not None else None
        body.clear()

        for item in content:
            body.append(item)
        if sect_pr_copy is not None:
            body.append(sect_pr_copy)

        new_document_xml = ET.tostring(root, encoding="utf-8", xml_declaration=True)
        output.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                if item.filename == "word/media/profile-merah.png":
                    continue
                data = zin.read(item.filename)
                if item.filename == "word/document.xml":
                    data = new_document_xml
                elif item.filename == "word/numbering.xml":
                    data = set_numbering(data)
                elif item.filename == "word/_rels/document.xml.rels":
                    data = set_relationships(data)
                elif item.filename == "[Content_Types].xml":
                    data = set_content_types(data)
                zout.writestr(item, data)
            zout.writestr("word/media/profile-merah.png", photo.read_bytes())


if __name__ == "__main__":
    workspace_root = Path(__file__).resolve().parents[2]
    output_dir = workspace_root / "file-siap-dibuka"
    template = output_dir / "CV_Sakti_Mujahid_Imani_ATS_Meratus.docx"
    photo = workspace_root / "live-coding" / "public" / "foto" / "profile-merah.png"
    outputs = [
        (output_dir / "CV_Sakti_Mujahid_Imani_ATS_Meratus_ID_Revised.docx", "id"),
        (output_dir / "CV_Sakti_Mujahid_Imani_ATS_Meratus_EN_Revised.docx", "en"),
    ]
    for path, language in outputs:
        build_document(template, path, photo, language)
        print(path)
