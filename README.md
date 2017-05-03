This plugin adds the option to insert code snippets in the rich text editor, as well as adding a custom code snippet fieldtype that can be used with custom templates to create things like Github Gist styled posts.

# Installation
Create a folder called `redactorcodesnippets` in the `craft/plugins` directory. Enter the directory and either:
 * Run 'git init; git git remote add origin https://github.com/MusicalCreeper01/Craft-Code-Snippets.git; git pull origin master'
 * Or download and copy all the files from this repository into it the folder

Next go to the plugins page in the admin control panel and enable the plugin.

## Enabling Rich Text code Snippets

To add the code snippets button in the Rich Text fields, edit `craft/configs/redactor/Standard.json` and add `codesnippets` to the `plugins` array. Done!

# Notes
Please report and bugs and suggestions in the issues section on Github :)
