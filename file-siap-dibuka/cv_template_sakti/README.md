# Sakti Mujahid Imani CV Template

This folder is based on `https://github.com/Caseinn/cv_template` and has been filled with Sakti Mujahid Imani's English CV content.

## Main Structure

The project root intentionally keeps only two folders:

```text
cv_template_sakti/
├── fig/
├── sections/
├── info.tex
├── main.tex
├── preamble.tex
└── README.md
```

## Compile

Use XeLaTeX:

```bash
xelatex main.tex
xelatex main.tex
```

If compiling in Overleaf, upload the contents of this folder, set the compiler to `XeLaTeX`, and set `main.tex` as the main document.

## Edit Points

- Personal information: `info.tex`
- Section order: `main.tex`
- CV content: files inside `sections/`
- Profile photo: `fig/me.png`
