var editor = grapesjs.init({
    container : '#gjs',
    fromElement: true,
    showOffsets: true,
    plugins: ['grapesjs-preset-newsletter'],
    pluginsOpts: {
        'grapesjs-preset-newsletter': {
            // options
        }
    },
    
});

const panelManager = editor.Panels;
panelManager.removeButton('options', 'canvas-clear');
panelManager.removeButton('options', 'gjs-open-import-template');
panelManager.removeButton('options', 'gjs-get-inlined-html');
panelManager.removeButton('options', 'export-template');

const commandsPanel = panelManager.getPanel('commands');
panelManager.addButton('commands',{
    id: 'cancel',
    className: 'custom-btn-cancel',
    label: 'Cancel',
    command: 'cb-cancel',
    active: false,
});
panelManager.addButton('commands',{
    id: 'reset',
    className: 'custom-btn-reset',
    label: 'Reset',
    command: 'cb-reset',
    active: false,
});
panelManager.addButton('commands',{
    id: 'save',
    className: 'custom-btn-save',
    label: 'Save',
    command: 'cb-save',
    active: false,
});
panelManager.addButton('commands',{
    id: 'close',
    className: 'custom-btn-close',
    label: 'Close',
    active: false,
    command: 'cb-close',
});

const commands = editor.Commands;
commands.add('cb-cancel', editor => {
    alert('This is my cancel command');
});
commands.add('cb-reset', editor => {
    alert('This is my reset command');
});
commands.add('cb-save', editor => {
    alert('This is my save command');
});
commands.add('cb-close', editor => {
    alert('This is my close command');
});
