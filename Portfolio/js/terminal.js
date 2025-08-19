    // ===== INTERACTIVE TERMINAL FUNCTIONALITY =====

class InteractiveTerminal {
    constructor() {
        this.commands = {
            help: {
                description: 'Show available commands',
                action: () => this.showHelp()
            },
            about: {
                description: 'Display information about Nafis Iqbal',
                action: () => this.showAbout()
            },
            skills: {
                description: 'List technical skills',
                action: () => this.showSkills()
            },
            projects: {
                description: 'Show recent projects',
                action: () => this.showProjects()
            },
            contact: {
                description: 'Display contact information',
                action: () => this.showContact()
            },
            clear: {
                description: 'Clear terminal screen',
                action: () => this.clearTerminal()
            },
            whoami: {
                description: 'Display current user info',
                action: () => this.showWhoAmI()
            },
            ls: {
                description: 'List available sections',
                action: () => this.listSections()
            },
            cat: {
                description: 'Display file contents (usage: cat [filename])',
                action: (args) => this.catFile(args)
            },
            pwd: {
                description: 'Print working directory',
                action: () => this.printWorkingDirectory()
            },
            date: {
                description: 'Show current date and time',
                action: () => this.showDate()
            },
            github: {
                description: 'Open GitHub profile',
                action: () => this.openGitHub()
            },
            linkedin: {
                description: 'Open LinkedIn profile',
                action: () => this.openLinkedIn()
            },
            theme: {
                description: 'Toggle color theme',
                action: () => this.toggleTheme()
            }
        };

        this.currentPath = '/home/visitor/portfolio';
        this.init();
    }

    init() {
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) {
            terminalInput.addEventListener('keydown', (e) => this.handleInput(e));
        }

        // Add welcome message
        this.addOutput('Welcome to Nafis Iqbal\'s Portfolio Terminal!', 'success');
        this.addOutput('Type "help" to see available commands.', 'info');
    }

    handleInput(event) {
        if (event.key === 'Enter') {
            const input = event.target.value.trim();
            event.target.value = '';

            if (input) {
                this.addInputLine(input);
                this.executeCommand(input);
            } else {
                this.addInputLine('');
            }
        }
    }

    addInputLine(input) {
        const terminalHistory = document.getElementById('terminal-history');
        const inputLine = document.createElement('div');
        inputLine.className = 'terminal-line';
        inputLine.innerHTML = `
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="command">${input}</span>
        `;
        terminalHistory.appendChild(inputLine);
        this.scrollToBottom();
    }

    addOutput(text, type = 'default') {
        const terminalHistory = document.getElementById('terminal-history');
        const outputLine = document.createElement('div');
        outputLine.className = `output-line ${type}`;
        outputLine.innerHTML = text;
        terminalHistory.appendChild(outputLine);
        this.scrollToBottom();
    }

    executeCommand(input) {
        const parts = input.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (this.commands[command]) {
            this.commands[command].action(args);
        } else {
            this.addOutput(`Command not found: ${command}. Type "help" for available commands.`, 'error');
        }
    }

    showHelp() {
        this.addOutput('Available commands:', 'info');
        Object.keys(this.commands).forEach(cmd => {
            this.addOutput(`  <span style="color: var(--color-accent)">${cmd.padEnd(12)}</span> - ${this.commands[cmd].description}`);
        });
    }

    showAbout() {
        const about = [
            'Name: Nafis Iqbal',
            'Role: Software Engineer | AI & ML Enthusiast',
            'Location: Chiba, Japan',
            'Education: B.Sc. in Computer Science & Engineering',
            'Company: SYSTM Co., Ltd.',
            '',
            'A passionate software engineer with expertise in AI, ML, and QA.',
            'Currently developing AI applications and maintaining web systems.'
        ];
        about.forEach(line => this.addOutput(line));
    }

    showSkills() {
        const skills = [
            '<span style="color: var(--color-accent)">Programming Languages:</span>',
            '  Python, Java, PHP, C, R, JavaScript, HTML/CSS',
            '',
            '<span style="color: var(--color-accent)">AI & Machine Learning:</span>',
            '  TensorFlow, PyTorch, OpenCV, Scikit-learn, Deep Learning',
            '',
            '<span style="color: var(--color-accent)">Web Development:</span>',
            '  Selenium, Servlet/JSP, React (Familiarity)',
            '',
            '<span style="color: var(--color-accent)">Databases:</span>',
            '  MySQL, RDBMS, DBMS, NoSQL',
            '',
            '<span style="color: var(--color-accent)">QA & Testing:</span>',
            '  Manual Testing, Penetration Testing, JMeter, Postman'
        ];
        skills.forEach(line => this.addOutput(line));
    }

    showProjects() {
        const projects = [
            '<span style="color: var(--color-accent)">Recent Projects:</span>',
            '',
            '1. AI Program Development (Current)',
            '   - Developing AI applications at SYSTM Co., Ltd.',
            '',
            '2. Video Surveillance System',
            '   - Real-time image recognition and action detection',
            '',
            '3. Bird Species Detection',
            '   - ML project for bird species identification',
            '',
            '4. EC Site Penetration Testing',
            '   - Security analysis using various tools',
            '',
            'Use "cat projects.md" for more details!'
        ];
        projects.forEach(line => this.addOutput(line));
    }

    showContact() {
        const contact = [
            '<span style="color: var(--color-accent)">Contact Information:</span>',
            '',
            'Email: nafisiqbalw@gmail.com',
            'GitHub: https://github.com/nafis2675',
            'LinkedIn: [Profile URL]',
            'Location: Chiba, Japan',
            '',
            'Feel free to reach out for collaborations or opportunities!'
        ];
        contact.forEach(line => this.addOutput(line));
    }

    clearTerminal() {
        const terminalHistory = document.getElementById('terminal-history');
        terminalHistory.innerHTML = `
            <div class="terminal-line">
                <span class="prompt">visitor@portfolio:~$</span>
                <span>Type 'help' for available commands</span>
            </div>
        `;
    }

    showWhoAmI() {
        this.addOutput('visitor', 'accent');
    }

    listSections() {
        const sections = [
            'about.html',
            'projects.html',
            'experience.html',
            'contact.html',
            'skills.md',
            'projects.md',
            'resume.pdf'
        ];
        sections.forEach(section => {
            this.addOutput(`<span style="color: var(--color-accent)">${section}</span>`);
        });
    }

    catFile(args) {
        if (!args || args.length === 0) {
            this.addOutput('Usage: cat [filename]', 'error');
            return;
        }

        const filename = args[0].toLowerCase();
        const files = {
            'skills.md': () => this.showSkills(),
            'projects.md': () => this.showProjects(),
            'about.md': () => this.showAbout(),
            'contact.md': () => this.showContact(),
            'resume.pdf': () => this.addOutput('Binary file (not displayable)', 'warning')
        };

        if (files[filename]) {
            files[filename]();
        } else {
            this.addOutput(`File not found: ${filename}`, 'error');
        }
    }

    printWorkingDirectory() {
        this.addOutput(this.currentPath, 'accent');
    }

    showDate() {
        const now = new Date();
        this.addOutput(now.toString(), 'info');
    }

    openGitHub() {
        this.addOutput('Opening GitHub profile...', 'success');
        setTimeout(() => {
            window.open('https://github.com/nafis2675', '_blank');
        }, 500);
    }

    openLinkedIn() {
        this.addOutput('LinkedIn profile URL not available', 'warning');
    }

    toggleTheme() {
        this.addOutput('Theme toggle not implemented yet', 'warning');
    }

    scrollToBottom() {
        const terminalHistory = document.getElementById('terminal-history');
        terminalHistory.scrollTop = terminalHistory.scrollHeight;
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveTerminal();
});
