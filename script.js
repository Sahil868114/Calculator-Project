class SafeCalculator {
    constructor() {
        this.display = document.querySelector('.display');
        this.input = '';
        this.previousValue = '';
        this.operator = null;
        this.history = [];
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupKeyboardEvents();
        this.applyTheme();
        this.loadHistory();
    }

    setupEventListeners() {
        // Number buttons
        document.querySelectorAll('.btn[data-value]').forEach(btn => {
            btn.addEventListener('click', () => this.handleNumber(btn.dataset.value));
        });

        // Operator buttons
        document.querySelectorAll('.btn[data-operator]').forEach(btn => {
            btn.addEventListener('click', () => this.handleOperator(btn.dataset.operator));
        });

        // Function buttons
        document.querySelectorAll('.btn[data-action]').forEach(btn => {
            btn.addEventListener('click', () => this.handleAction(btn.dataset.action));
        });

        // Theme toggle
        document.querySelector('.theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Copy button
        // document.querySelector('.copy-btn').addEventListener('click', () => this.copyToClipboard());

        // History toggle
        document.querySelector('.history-toggle').addEventListener('click', () => this.toggleHistory());

        // History items
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('history-item')) {
                this.input = e.target.dataset.value;
                this.updateDisplay();
            }
        });
    }

    setupKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (/^\d$/.test(e.key)) this.handleNumber(e.key);
            if (e.key === '.') this.handleNumber('.');
            if (['+', '-', '*', '/'].includes(e.key)) this.handleOperator(e.key);
            if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                this.handleAction('equals');
            }
            if (e.key === 'Backspace') {
                e.preventDefault();
                this.handleAction('delete');
            }
            if (e.key.toLowerCase() === 'c') {
                e.preventDefault();
                this.handleAction('clear');
            }
            if (e.key.toLowerCase() === 't') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    handleNumber(num) {
        if (num === '.' && this.input.includes('.')) return;
        this.input += num;
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.input === '') return;
        if (this.previousValue !== '') {
            this.calculate();
        }
        this.previousValue = this.input;
        this.input = '';
        this.operator = op;
    }

    handleAction(action) {
        switch (action) {
            case 'clear':
                this.input = '';
                this.previousValue = '';
                this.operator = null;
                this.updateDisplay();
                break;
            case 'delete':
                this.input = this.input.slice(0, -1);
                this.updateDisplay();
                break;
            case 'percent':
                if (this.input) {
                    this.input = String(parseFloat(this.input) / 100);
                    this.updateDisplay();
                }
                break;
            case 'equals':
                this.calculate();
                break;
        }
    }

    calculate() {
        if (this.input === '' || this.previousValue === '' || !this.operator) return;

        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.input);

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = current !== 0 ? prev / current : 'Error';
                break;
            default:
                return;
        }

        // Format result (limit decimals)
        if (typeof result === 'number') {
            result = Math.round(result * 10000000000) / 10000000000;
        }

        this.addToHistory(`${this.previousValue} ${this.operator} ${this.input}`, result);
        this.input = String(result);
        this.previousValue = '';
        this.operator = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.input || '0';
    }

    copyToClipboard() {
        // Removed - copy button feature disabled
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
        document.querySelector('.theme-icon').textContent = this.isDarkTheme ? '☀️' : '🌙';
    }

    addToHistory(expression, result) {
        this.history.unshift({ expression, result });
        if (this.history.length > 10) this.history.pop();
        localStorage.setItem('calcHistory', JSON.stringify(this.history));
        this.updateHistoryDisplay();
    }

    loadHistory() {
        const saved = localStorage.getItem('calcHistory');
        if (saved) {
            this.history = JSON.parse(saved);
            this.updateHistoryDisplay();
        }
    }

    updateHistoryDisplay() {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = this.history
            .map(item => `<button class="history-item" data-value="${item.result}">${item.expression} = ${item.result}</button>`)
            .join('');
    }

    toggleHistory() {
        const historyList = document.querySelector('.history-list');
        historyList.classList.toggle('show');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SafeCalculator();
});
