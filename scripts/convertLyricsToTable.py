#!/bin/python3
import sys

# html_str, the string where we add the processed stuff
# "initialized" with <table> stuff
html_str = "<table border='1'><tbody>"

# if lyrics txt file is not mentioned, exit.
if len(sys.argv) == 1:
    print("mention lyrics filename.")
    exit()

# we open the text file,
# and store it in a variable named text
with open(sys.argv[1], 'r', encoding='utf-8') as f:
    text = f.read()

# convert the text into an array, for looping
lines = text.splitlines()

# while loop begin
i = 0
# run this loop as long as i is greater than the length of lines array
while i < len(lines):
    # lines that start with "~ Start" refer to starting after the said bar
    if lines[i].startswith("~ Start"):
        html_str += f"<tr><td colspan='2'>{lines[i]}</td></tr>"
        i += 1
    # M: only males should sing
    # F: only females should sing
    # M+F: both of em
    elif lines[i] == "M+F" or lines[i] == "M" or lines[i] == "F":
        # creates
        # <tr>
        #   <td>M+F</td>
        #   <td>line 1</td>
        # </tr>
        html_str += f"<tr><td>{lines[i]}</td>"
        html_str += f"<td>{lines[i + 1]}<br>"
        html_str += f"{lines[i + 2]}</td></tr>"

        # skip three lines instead of 1
        # (we assume only two lines need to be repeated
        # TODO: fix this
        i += 3
    # lines that start with brackets are indications of repetition (idk music lingo)
    # notice the text-align: end? yes, it's to push it to the right side
    elif lines[i].startswith("("):
        html_str += f"<tr><td colspan='2' style='text-align: end'>{lines[i]}</td></tr>"
        i += 1
# while loop end

# add the final closing tags (hack, i know)
html_str += "</tbody></table>"

print(html_str)
