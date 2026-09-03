from __future__ import annotations

import copy
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
XML = "http://www.w3.org/XML/1998/namespace"
PKG_REL = "http://schemas.openxmlformats.org/package/2006/relationships"

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


def rpr(size: int = 19, bold: bool = False, italic: bool = False,
        color: str = "000000", underline: bool = False) -> ET.Element:
    pr = e("w:rPr")
    fonts = e(
        "w:rFonts",
        {
            qn("w:ascii"): "Calibri",
            qn("w:hAnsi"): "Calibri",
            qn("w:eastAsia"): "Calibri",
            qn("w:cs"): "Calibri",
        },
    )
    pr.append(fonts)
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


def run(text: str, size: int = 19, bold: bool = False, italic: bool = False,
        color: str = "000000", underline: bool = False) -> ET.Element:
    r = e("w:r")
    r.append(rpr(size=size, bold=bold, italic=italic, color=color, underline=underline))
    t = e("w:t")
    t.set(f"{{{XML}}}space", "preserve")
    t.text = text
    r.append(t)
    return r


def paragraph(
    parts: list[ET.Element] | str,
    *,
    before: int = 0,
    after: int = 30,
    size: int = 19,
    bold: bool = False,
    italic: bool = False,
    justify: str | None = None,
    right_tab: bool = False,
    keep_next: bool = False,
    border_bottom: bool = False,
    bullet: bool = False,
) -> ET.Element:
    p = e("w:p")
    ppr = e("w:pPr")
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
        tabs.append(e("w:tab", {qn("w:val"): "right", qn("w:pos"): "10296"}))
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
                qn("w:line"): "240",
                qn("w:lineRule"): "auto",
            },
        )
    )
    if justify:
        ppr.append(e("w:jc", {qn("w:val"): justify}))
    p.append(ppr)
    if isinstance(parts, str):
        p.append(run(parts, size=size, bold=bold, italic=italic))
    else:
        for item in parts:
            p.append(item)
    return p


def hyperlink(rel_id: str, text: str, *, size: int = 18) -> ET.Element:
    link = e("w:hyperlink", {qn("r:id"): rel_id, qn("w:history"): "1"})
    link.append(run(text, size=size, color="1155CC", underline=True))
    return link


def title(text: str) -> ET.Element:
    return paragraph(text, after=20, size=34, bold=True)


def subtitle(text: str) -> ET.Element:
    return paragraph(text, after=20, size=19, bold=True)


def section(text: str, before: int = 150) -> ET.Element:
    return paragraph(text, before=before, after=55, size=21, bold=True, border_bottom=True, keep_next=True)


def entry(org: str, date: str) -> ET.Element:
    return paragraph([run(org, size=19, bold=True), run("\t" + date, size=19, bold=True)],
                     before=70, after=6, right_tab=True, keep_next=True)


def role(text: str) -> ET.Element:
    return paragraph(text, after=28, size=19, italic=True, keep_next=True)


def bullet(text: str) -> ET.Element:
    return paragraph(text, after=22, size=18, justify="both", bullet=True)


def bullet_parts(parts: list[ET.Element]) -> ET.Element:
    return paragraph(parts, after=22, size=18, justify="both", bullet=True)


def page_break() -> ET.Element:
    p = e("w:p")
    r = e("w:r")
    r.append(e("w:br", {qn("w:type"): "page"}))
    p.append(r)
    return p


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
    thesis_url = "https://repo.itera.ac.id/depan/submission/SB2606220028"
    exists = any(
        rel.get("Id") == "rIdThesisRepo" or rel.get("Target") == thesis_url
        for rel in root.findall(f"{{{PKG_REL}}}Relationship")
    )
    if not exists:
        ET.SubElement(
            root,
            f"{{{PKG_REL}}}Relationship",
            {
                "Id": "rIdThesisRepo",
                "Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                "Target": thesis_url,
                "TargetMode": "External",
            },
        )
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def build_document(template: Path, output: Path) -> None:
    with zipfile.ZipFile(template, "r") as zin:
        document_xml = zin.read("word/document.xml")
        root = ET.fromstring(document_xml)
        ignorable = qn("mc:Ignorable")
        if ignorable in root.attrib:
            del root.attrib[ignorable]
        body = root.find("w:body", {"w": W})
        if body is None:
            raise RuntimeError("Missing Word document body")
        sect_pr = body.find("w:sectPr", {"w": W})
        sect_pr_copy = copy.deepcopy(sect_pr) if sect_pr is not None else None
        body.clear()

        contact = paragraph(
            [
                hyperlink("rIdu3qgt43pun1cqqd_7tlmd", "saktimujahid.9b@gmail.com"),
                run("  |  +6281298056550  |  ", size=18),
                hyperlink("rIdbjsgld9uarkkem0blpzdt", "linkedin.com/in/saktimujahid"),
                run("  |  ", size=18),
                hyperlink("rIdvpjfbv-bekrttq0nsdvij", "github.com/Sakti-122140123"),
            ],
            after=70,
        )

        paragraphs = [
            title("Sakti Mujahid Imani"),
            subtitle("Engineer Intern Candidate | Software Engineering | Web Development"),
            contact,
            paragraph(
                "Computer Science graduate from Institut Teknologi Sumatera (ITERA) with experience building React/Laravel web systems, documenting workflows, testing features, and coordinating technical tasks. Targeting an Engineer Intern role at PT Transportasi Jakarta to support mentor-directed feature development, unit testing, bug fixing, technical documentation, and Agile team routines.",
                after=65,
                size=19,
                justify="both",
            ),
            section("EDUCATION", before=105),
            entry("Institut Teknologi Sumatera - Lampung Selatan, Indonesia", "Aug 2022 - Jul 2025"),
            role("Bachelor of Computer Science, GPA: 3.56/4.00 (Graduated 3 July 2025)"),
            bullet('Thesis: "Development of the Student Affairs Subsystem for FTI ITERA Harmony Web Using Rational Unified Process (RUP) Method and Kanban Tools."'),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdThesisRepo", "repo.itera.ac.id/depan/submission/SB2606220028", size=18)]),
            bullet("Relevant focus: software development, web development, database systems, software testing, machine learning, data analysis, and project management fundamentals."),
            section("WORK EXPERIENCE", before=105),
            entry("FTI ITERA - Lampung Selatan, Indonesia", "2025 - 2026"),
            role("Full Stack Developer, Website Harmony (Independent Study / MBKM)"),
            bullet("Developed the Student Affairs correspondence subsystem using React, Laravel, and MySQL; organized analysis, implementation, and documentation with RUP stages and Kanban task tracking."),
            bullet("Measured impact: reduced letter-processing turnaround from 7-10 to 2-5 working days, achieved 100% black-box test pass rate, and reached 88.57% UAT score."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdThesisRepo", "thesis repository", size=18), run("; ", size=18), hyperlink("rId-syfviv3gyxtyik7_m7j_", "harmony.fti.itera.ac.id", size=18)]),
            entry("Kominfo Kota Bandar Lampung - Bandar Lampung, Indonesia", "2025"),
            role("Web Developer & Staff, Information Security and Cyber Division (Internship / MBKM)"),
            bullet("Worked on 2 government web systems: SIMAS for inter-agency letter validation and SIMAMANG for online internship registration."),
            bullet("Implemented feature flows for account creation, document upload, status tracking, multi-tenant data organization, and centralized recap using Laravel, Inertia.js, and React.js."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdnpukyclg-khlzvvitpnjc", "simas.bandarlampungkota.go.id", size=18), run("; ", size=18), hyperlink("rIdlqrlucxiavwztla1vk6dx", "simamang.bandarlampungkota.go.id", size=18)]),
            entry("Institut Teknologi Sumatera - Lampung Selatan, Indonesia", "2023 - 2025"),
            role("Teaching & Laboratory Assistant / Coordinator"),
            bullet("Assisted and coordinated practicum/course delivery across 8+ courses, including Basic Physics Practicum I & II, Introduction to Computer and Software, Software Engineering Fundamentals, and Formal Language and Automata Theory."),
            bullet("Coordinated Basic Physics Practicum assistant teams for 3 semesters; managed schedules, task allocation, grade recap, student evaluation, and academic documentation."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdguqpws3dogzmejs6as99h", "Teaching Assistant documents folder", size=18)]),
            section("ORGANIZATIONAL AND LEADERSHIP EXPERIENCE", before=105),
            entry("HMIF ITERA - Expert Staff, Member Development Division", "2025"),
            bullet("Supported 1 member-development division by helping coordinate student development initiatives, communication flow, and program execution."),
            entry("HMIF ITERA - Speaker, MBKM Sharing Session", "2025"),
            bullet("Delivered 1 MBKM sharing session to explain independent-study and internship pathways for Computer Science students."),
            entry("HMIF ITERA - Staff, Training and Professional Development Division", "2024"),
            bullet("Contributed to 1 training/professional-development division through team-based planning and execution of student development activities."),
            entry("Campus Event Medical Staff - ITERA Olympic & PPLK ITERA", "2023 & 2025"),
            bullet("Supported medical readiness and participant safety coverage in 2 campus-level events: PPLK ITERA 2023 and ITERA Olympic 2025."),
            page_break(),
            section("TRAINING", before=0),
            entry("DBS Foundation x Dicoding - Indonesia", "2025"),
            role("Coding Camp 2025, Machine Learning Engineer Learning Path"),
            bullet("Completed structured training across 6 technical areas: Python, data analysis, data processing, machine learning, deep learning fundamentals, and MLOps."),
            bullet("Produced project submissions and collaborated in team-based learning, strengthening documentation, problem solving, time management, and English communication."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdfc0ht1yfra8gwpvsvjxjx", "certificates folder", size=18)]),
            entry("Telkom Indonesia - Indonesia", "Jul 2024 - Sep 2024"),
            role("Digistar Class 2024, Hacker (Front-End)"),
            bullet("Completed a 3-month front-end development program focused on responsive React-based interfaces and feature implementation."),
            bullet("Developed interactive web features with peers, improving UI implementation, collaboration, and adaptability."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdfc0ht1yfra8gwpvsvjxjx", "certificates folder", size=18)]),
            section("PROJECT", before=105),
            entry("Web Harmony - Campus Correspondence System", "React, Laravel, MySQL"),
            bullet("Built student-affairs letter administration features, workflow documentation, and validation support for FTI ITERA Harmony Web."),
            bullet_parts([run("Impact & evidence: ", size=18, bold=True), run("7-10 days reduced to 2-5 days; 100% black-box pass; 88.57% UAT; ", size=18), hyperlink("rId-syfviv3gyxtyik7_m7j_", "live system", size=18)]),
            entry("SIMAS - Inter-agency Letter Management System", "Laravel, Inertia.js, React.js"),
            bullet("Designed a multi-tenant architecture and centralized recap workflow for government letter validation across agencies."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdnpukyclg-khlzvvitpnjc", "simas.bandarlampungkota.go.id", size=18), run("; measured scope: 1 multi-tenant web system.", size=18)]),
            entry("SIMAMANG - Internship Registration Portal", "Laravel, React.js"),
            bullet("Developed account creation, document upload, and application-status tracking for online internship registration."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdlqrlucxiavwztla1vk6dx", "simamang.bandarlampungkota.go.id", size=18), run("; measured scope: 3 core applicant features.", size=18)]),
            entry("End-to-End ETL Pipeline", "Python, Pytest, PostgreSQL, Google Sheets API"),
            bullet("Extracted product data from 50 web pages, transformed it, and loaded the output into 3 destinations: CSV, Google Sheets, and PostgreSQL."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdri5r4btpw9qxssu2y8zvn", "GitHub repository", size=18), run("; added Pytest-based tests to verify pipeline behavior.", size=18)]),
            entry("CI/CD Pipeline for ML Model", "GitHub Actions, MLflow, Docker"),
            bullet("Automated 4 delivery steps: model training, MLflow experiment tracking, Docker image build, and Docker Hub publishing through GitHub Actions."),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdlep0ayodops1zkrjf8jmi", "GitHub repository", size=18)]),
            section("CERTIFICATION", before=105),
            bullet_parts([run("Evidence: ", size=18, bold=True), hyperlink("rIdfc0ht1yfra8gwpvsvjxjx", "Google Drive certificates folder", size=18)]),
            bullet("2026: Prompt Engineering for Software Developers; Building Machine Learning Systems; Machine Learning Operations (MLOps); Applied Data Science with Microsoft Fabric."),
            bullet("2025: Applied Machine Learning; Data Analysis with Python; SQL Fundamentals; Git & GitHub Fundamentals; JavaScript Programming Fundamentals; SOLID Programming Principles."),
            bullet("2024: Project Management Fundamentals; Beginner Back-End Development with JavaScript; Cloud Practitioner Essentials (AWS Cloud Fundamentals)."),
            section("SKILLS", before=105),
            paragraph([run("Hard Skills: ", size=18, bold=True), run("React.js, Laravel, Inertia.js, MySQL, RESTful web systems, SQL, JavaScript, Python, Pytest, Git/GitHub, GitHub Actions, Docker, technical documentation, data analysis, and machine learning.", size=18)], after=18, justify="both"),
            paragraph([run("Engineering Practices: ", size=18, bold=True), run("feature implementation, bug fixing, black-box testing, UAT support, unit testing basics, Kanban task tracking, and Agile collaboration.", size=18)], after=18, justify="both"),
            paragraph([run("Soft Skills: ", size=18, bold=True), run("communication, teamwork, time management, public speaking, problem solving, adaptability, and attention to detail.", size=18)], after=18, justify="both"),
            section("LANGUAGE", before=105),
            paragraph([run("Bahasa Indonesia: ", size=18, bold=True), run("Native. ", size=18), run("English: ", size=18, bold=True), run("Limited Working Proficiency.", size=18)], after=22),
        ]

        for p in paragraphs:
            body.append(p)

        if sect_pr_copy is not None:
            body.append(sect_pr_copy)

        new_document_xml = ET.tostring(root, encoding="utf-8", xml_declaration=True)

        with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename == "word/document.xml":
                    data = new_document_xml
                elif item.filename == "word/numbering.xml":
                    data = set_numbering(data)
                elif item.filename == "word/_rels/document.xml.rels":
                    data = set_relationships(data)
                zout.writestr(item, data)


if __name__ == "__main__":
    workspace_root = Path(__file__).resolve().parents[2]
    cv_output_dir = workspace_root / "file-siap-dibuka"
    template = cv_output_dir / "CV_Sakti_Mujahid_Imani_Styled.docx"
    output = cv_output_dir / "CV_Sakti_Mujahid_Imani_Engineer_Intern_Transjakarta.docx"
    build_document(template, output)
    print(output)
