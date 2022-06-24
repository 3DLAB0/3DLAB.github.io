const template = document.createElement('template');

template.innerHTML = `
    <link rel="stylesheet" href="../css/sidebar.css"type="text/css" >
    <div class="icon-bar">
        <a href="../index.html">
            <img src="../3DLAB.png" alt="Go back to 3DLAB" width="50" height="50">
        </a>
        <a href="/html/calendar.html">
            <img src="../img/log/calendar_w.png" alt="Go to resources" width="50" height="50">
        </a>
        <a href="/html/printing.html">
            <img src="../img/log/3dprint_w.png" alt="Go to resources" width="50" height="50">
        </a>
        <a href="/index.html">
            <img src="../img/log/resources_w.png" alt="Go to resources" width="50" height="50">
        </a>    
    </div>
`;

document.body.appendChild(template.content);