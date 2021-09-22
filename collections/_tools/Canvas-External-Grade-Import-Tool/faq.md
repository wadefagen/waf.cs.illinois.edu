---
layout: tool2
title: "FAQ: Canvas External Grade Import Tool"
shortTitle: "FAQ"

toolName: "Canvas External Grade Import Tool"
toolURL: /tools/Canvas-External-Grade-Import-Tool/

date: 2021-09-20
---

<style>
h2 {
  margin-top: 20px;
}
</style>

# Frequently Asked Questions

Frequently Asked Questions regarding the [Canvas External Grade Import Tool](/tools/Canvas-External-Grade-Import-Tool/).


## What's New?

- **Sept. 20**: Added support for UIUC scantron file format.
- **Sept. 9**: Change export to include only identifiers in the external assessment, instead of all records in the Canvas file, to allow for partial-class updates
- **Sept. 8**: Added `netid` as a valid identification header
- **Sept. 6**: Added support for Google@Illinois forms and added `email` as a valid identification header
- **Sept. 4**: Improved format of messages when data is missing between the two files
- **Sept. 3**: Added Lon Capa (via Karle Flanagan for the format)
- **Sept. 2**: Initial Tool Development


## How does this tool function?

This tool looks for known identification columns among common external assessment tools used across Illinois.  For example:

- PrairieLearn (PL) gradebook export has a `UIN`, `UID`, and `Name` column that identifies the student,
- Lon Capa export has a `username` column that identifies the student,
- ...etc...

Using the identification column found in the external assessment data, this tool finds the same student in the Canvas gradebook, adds their grade for the assessment, and allows you to download a new file ready to be imported into Canvas.  The CSV you download for canvas will contain:

- The six required Canvas fields needed for upload,
- All assessments you checked to export


## What does scaling do?

If you provide a number in both scaling boxes, this tool will scale your grade from the value on the external tool (ex: many tools give values out of 100) to the point value of the assessment on Canvas.  If an assessment is worth **20 points** to your course grade, but the external tool reports it out of 100, you would want to "Scale from #/**100** to #/**20** for Canvas".


## My external CSV does not work.

Let Wade know -- waf@illinois.edu!  I will need the **exact** format of the CSV export, which is best provided by sending a copy of the export to me in order to identify the exact format that the external tool exports your data.  You can remove all but a few rows to preserve privacy (but do not remove columns)!

To be secure in sending data that contain student identifiers, use [UofI Box](https://box.illinois.edu/), [PEAR](https://www.aits.uillinois.edu/services/application_services/PEAR), or another secure system.

The current formats supported are:

- [PrairieLearn](https://prairielearn.engr.illinois.edu/) (Gradebook and Assessment Exports),
- [Lon Capa](https://atlas.illinois.edu/services/lon-capa-students),
- Google@Illinois Forms Result Sheet (with @illinois.edu addresses are automatically recorded),
- Scantron result files from [CITL exam grading services](https://citl.illinois.edu/our-services/exam-scoring),
- Any CSV format that uses "UIN" as a header for a UIN column,
- Any CSV format that uses "username", "email", or "email address" (all case-insensitive) for at NetID or NetID@illinois.edu column

## Is this tool secure?

The most useful statement is that we built this tool for ourselves and made it publicly available to help others.  *We (Wade Fagen-Ulmschneider and Karle Flanagan) are using this tool and we trust this tool.*  If you don't trust us, you should not trust this tool.

You know that most web-based applications use a server that processes your data.  Even though this runs in your web browser, this page is entirely in client-side JavaScript.  It runs entirely **on your device without sending any data to my server**.  We don't want to know what grades your students have. :)

Since **no data is sent to or stored on any server though using the tool**, your data is as secure as your computer is secure.  (If someone gets physical access to your computer, they can read the CSV files you download from your hard drive.  We cannot be more secure than that.)

If you don't trust us, you (or someone you trust who does Computer Science stuffs) can also inspect the source code or inspect network traffic as you're viewing the tool.  If this tool is useful to many, we will see if campus can give it "stamp of approval" or something.
