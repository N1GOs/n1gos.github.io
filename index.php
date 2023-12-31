<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notepad</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="notepad-container" class="show">
    <textarea id="notepad" placeholder="Start typing..."></textarea>
    <div id="notepad-toolbar">
        <div class="toolbar-group">
            <label for="size">Size:</label>
            <input type="number" id="size" min="12" max="24" value="14">
        </div>
        <div class="toolbar-group">
            <label for="color">Color:</label>
            <input type="color" id="color" value="#000000">
        </div>
        <div class="toolbar-group">
            <label for="font">Font:</label>
            <select id="font">
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
            </select>
        </div>
        <button id="save-btn" onclick="saveNotepad()">Save</button>
        <div id="theme-switch">
            <label for="theme-toggle">Dark Mode:</label>
            <input type="checkbox" id="theme-toggle" onchange="toggleDarkMode()">
        </div>
        <div id="language-switch">
            <button onclick="toggleLanguage()">Switch Language</button>
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
