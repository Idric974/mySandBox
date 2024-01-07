let time = Math.random();

let setScrollDelay = parseInt(time * 10000);
console.log('setScrollDelay', setScrollDelay);

let setactionDelay = parseInt(time * 10500);
console.log('setactionDelay', setactionDelay);

let setnextPageDelay = parseInt(time * 11000);
console.log('setnextPageDelay', setnextPageDelay);

Linkedin = {
    config: {
        scrollDelay: setScrollDelay,
        actionDelay: setactionDelay,
        nextPageDelay: setnextPageDelay,

        // set to -1 for no limit
        maxRequests: -1,
        totalRequestsSent: 0,

        // set to false to skip adding note in invites
        addNote: true,
        note: "Bonjour {{name}}, j'aide à l'accompagnement Qualiopi : assistance technique, préparation à l'audit et à la certification Qualiopi. J'aimerais t'ajouter à mon réseau. Mon objectif est de partager des informations ou opportunités de travail ou de mission. Bien cordialement et à bientôt.",
    },

    init: function (data, config) {
        console.info(
            '%c ✅ INFO : script initialized on the page...',
            'color: green'
        );
        console.debug(
            '%c ⭐ DEBUG : scrolling to bottom in ' + config.scrollDelay + ' ms',
            'color: blue'
        );
        setTimeout(() => this.scrollBottom(data, config), config.actionDelay);
    },

    scrollBottom: function (data, config) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        console.debug(
            '%c ⭐ DEBUG : scrolling to top in ' + config.scrollDelay + ' ms',
            'color: blue'
        );
        setTimeout(() => this.scrollTop(data, config), config.scrollDelay);
    },

    scrollTop: function (data, config) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.debug(
            '%c ⭐ DEBUG : inspecting elements in ' + config.scrollDelay + ' ms',
            'color: blue'
        );
        setTimeout(() => this.inspect(data, config), config.scrollDelay);
    },

    inspect: function (data, config) {
        var totalRows = this.totalRows();
        console.debug(
            '%c ⭐ DEBUG : total search results found on page are ' + totalRows,
            'color: blue'
        );
        if (totalRows >= 0) {
            this.compile(data, config);
        } else {
            console.warn('WARN: end of search results!');
            this.complete(config);
        }
    },

    compile: function (data, config) {
        var elements = document.querySelectorAll('button');
        data.pageButtons = [...elements].filter(function (element) {
            return element.textContent.trim() === 'Connect';
        });

        if (!data.pageButtons || data.pageButtons.length === 0) {
            console.warn(
                '%c 🔺 ERROR : no connect buttons found on page!',
                'color: red'
            );
            console.info('%c ✅ INFO : moving to next page...', 'color: green');
            setTimeout(() => {
                this.nextPage(config);
            }, config.nextPageDelay);
        } else {
            data.pageButtonTotal = data.pageButtons.length;
            console.info(
                '%c ✅ INFO : ' + data.pageButtonTotal + ' connect buttons found',
                'color: green'
            );
            data.pageButtonIndex = 0;
            var names = document.getElementsByClassName('entity-result__title-text');
            names = [...names].filter(function (element) {
                return element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.textContent.includes(
                    'Connect\n'
                );
            });
            data.connectNames = [...names].map(function (element) {
                return element.innerText.split(' ')[0];
            });
            console.debug(
                '%c ⭐ DEBUG : starting to send invites in ' +
                config.actionDelay +
                ' ms',
                'color: blue'
            );
            setTimeout(() => {
                this.sendInvites(data, config);
            }, config.actionDelay);
        }
    },

    sendInvites: function (data, config) {
        console.debug('remaining requests ' + config.maxRequests);
        if (config.maxRequests == 0) {
            console.info(
                '%c ✅ INFO : max requests reached for the script run!',
                'color: green'
            );
            this.complete(config);
        } else {
            console.debug(
                '%c ⭐ DEBUG : sending invite to ' +
                (data.pageButtonIndex + 1) +
                ' out of ' +
                data.pageButtonTotal,
                'color: blue'
            );

            var button = data.pageButtons[data.pageButtonIndex];

            button.click();
            if (config.addNote && config.note) {
                console.debug(
                    '%c ⭐ DEBUG : clicking Add a note in popup, if present, in ' +
                    config.actionDelay +
                    ' ms',
                    'color: blue'
                );
                setTimeout(() => this.clickAddNote(data, config), config.actionDelay);
            } else {
                console.debug(
                    '%c ⭐ DEBUG : clicking done in popup, if present, in ' +
                    config.actionDelay +
                    ' ms',
                    'color: blue'
                );

                setTimeout(() => this.clickDone(data, config), config.actionDelay);
            }
        }
    },

    clickAddNote: function (data, config) {
        var buttons = document.querySelectorAll('button');
        var addNoteButton = Array.prototype.filter.call(buttons, function (el) {
            return el.textContent.trim() === 'Add a note';
        });
        // adding note if required
        if (addNoteButton && addNoteButton[0]) {
            console.debug(
                '%c ⭐ DEBUG : clicking add a note button to paste note',
                'color: blue'
            );
            addNoteButton[0].click();
            console.debug(
                '%c ⭐ DEBUG : pasting note in ' + config.actionDelay,
                'color: blue'
            );
            setTimeout(() => this.pasteNote(data, config), config.actionDelay);
        } else {
            console.debug(
                '%c ⭐ DEBUG : add note button not found, clicking send on the popup in ' +
                config.actionDelay,
                'color: blue'
            );
            setTimeout(() => this.clickDone(data, config), config.actionDelay);
        }
    },

    pasteNote: function (data, config) {
        noteTextBox = document.getElementById('custom-message');
        noteTextBox.value = config.note.replace(
            '{{name}}',
            data.connectNames[data.pageButtonIndex]
        );
        noteTextBox.dispatchEvent(
            new Event('input', {
                bubbles: true,
            })
        );
        console.debug(
            '%c ⭐ DEBUG : clicking send in popup, if present, in ' +
            config.actionDelay +
            ' ms',
            'color: blue'
        );
        setTimeout(() => this.clickDone(data, config), config.actionDelay);
    },

    clickDone: function (data, config) {
        var buttons = document.querySelectorAll('button');
        var doneButton = Array.prototype.filter.call(buttons, function (el) {
            return el.textContent.trim() === 'Send';
        });
        // Click the first send button
        if (doneButton && doneButton[0]) {
            console.debug(
                '%c ⭐ DEBUG : clicking send button to close popup',
                'color: blue'
            );
            doneButton[0].click();
        } else {
            console.debug(
                '%c ⭐ DEBUG : send button not found, clicking close on the popup in ' +
                config.actionDelay,
                'color: blue'
            );
        }
        setTimeout(() => this.clickClose(data, config), config.actionDelay);
    },

    clickClose: function (data, config) {
        var closeButton = document.getElementsByClassName(
            'artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view'
        );
        if (closeButton && closeButton[0]) {
            closeButton[0].click();
        }
        console.info(
            '%c ✅ INFO : invite sent to ' +
            (data.pageButtonIndex + 1) +
            ' out of ' +
            data.pageButtonTotal,
            'color: green'
        );
        config.maxRequests--;
        config.totalRequestsSent++;
        if (data.pageButtonIndex === data.pageButtonTotal - 1) {
            console.debug(
                '%c ⭐ DEBUG : all connections for the page done, going to next page in ' +
                config.actionDelay +
                ' ms',
                'color: blue'
            );

            setTimeout(() => this.nextPage(config), config.actionDelay);
        } else {
            data.pageButtonIndex++;
            console.debug(
                '%c ⭐ DEBUG : sending next invite in ' + config.actionDelay + ' ms',
                'color: blue'
            );

            setTimeout(() => this.sendInvites(data, config), config.actionDelay);
        }
    },

    nextPage: function (config) {
        var pagerButton = document.getElementsByClassName(
            'artdeco-pagination__button--next'
        );
        if (
            !pagerButton ||
            pagerButton.length === 0 ||
            pagerButton[0].hasAttribute('disabled')
        ) {
            console.info('%c ✅ INFO: no next page button found!', 'color: green');
            return this.complete(config);
        }
        console.info('%c ✅ INFO : Going to next page...', 'color: green');
        pagerButton[0].children[0].click();
        setTimeout(() => this.init({}, config), config.nextPageDelay);
    },

    complete: function (config) {
        console.info(
            '%c ❗❗❗ INFO : script completed after sending ' +
            config.totalRequestsSent +
            ' connection requests',
            'color: red'
        );
    },

    totalRows: function () {
        var search_results = document.getElementsByClassName('search-result');
        if (search_results && search_results.length != 0) {
            return search_results.length;
        } else {
            return 0;
        }
    },
};

Linkedin.init({}, Linkedin.config);
