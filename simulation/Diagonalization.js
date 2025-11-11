class DiagonalizationDemo {
    constructor() {
        this.alphabetSize = 2;
        this.windowSize = 10;
        this.windowStart = 0;
        this.truthTable = [];
        this.diagonalString = '';
        
        // Initialize
        this.generateTruthTable();
        this.updateDisplay();
        this.updateAlphabet();
    }
    
    updateChallengeQuestion() {
        const requiredLength = this.windowSize;
        document.getElementById('challengeQuestion').innerHTML = `
            What is the diagonalized string that results from applying Cantor's diagonal argument to this table?<br>
            <small class="text-gray-600">The string should be exactly <strong>${requiredLength}</strong> characters long.</small>
        `;
    }
    
    generateTruthTable() {
        this.truthTable = [];
        const stringLength = this.windowSize;
        
        // Generate random strings for each natural number in the window
        for (let i = 0; i < this.windowSize; i++) {
            const naturalNumber = this.windowStart + i;
            const randomString = this.generateRandomString(stringLength);
            this.truthTable.push({
                input: naturalNumber,
                output: randomString
            });
        }
        
        this.constructDiagonalString();
        this.renderTruthTable();
        this.updateChallengeQuestion();
    }
    
    generateRandomString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * this.alphabetSize).toString();
        }
        return result;
    }
    
    constructDiagonalString() {
        this.diagonalString = '';
        
        for (let i = 0; i < Math.min(this.windowSize, this.truthTable.length); i++) {
            const currentString = this.truthTable[i].output;
            if (i < currentString.length) {
                const diagonalChar = currentString[i];
                
                // Construct the negated diagonal
                const negatedChar = this.negateCharacter(diagonalChar);
                this.diagonalString += negatedChar;
            }
        }
        
        // Update negation mapping display
        this.updateNegationMapping();
    }
    
    negateCharacter(char) {
        const charNum = parseInt(char);
        return ((charNum + 1) % this.alphabetSize).toString();
    }
    
    updateNegationMapping() {
        const mapping = [];
        for (let i = 0; i < this.alphabetSize; i++) {
            const original = i.toString();
            const negated = this.negateCharacter(original);
            mapping.push(`${original} → ${negated}`);
        }
        document.getElementById('negationMapping').textContent = mapping.join('  |  ');
    }
    
    renderTruthTable() {
        const tableContainer = document.getElementById('truthTable');
        let html = '<table class="w-full text-sm">';
        
        // Header
        html += '<thead class="bg-gray-100">';
        html += '<tr>';
        html += '<th class="px-3 py-2 border text-left">n ∈ ℕ</th>';
        html += '<th class="px-3 py-2 border text-left">f(n) ∈ Σ^ω</th>';
        html += '<th class="px-3 py-2 border text-center">Position</th>';
        for (let i = 0; i < this.windowSize; i++) {
            html += `<th class="px-1 py-2 border text-center text-xs">${i}</th>`;
        }
        html += '</tr>';
        html += '</thead>';
        
        // Body
        html += '<tbody>';
        this.truthTable.forEach((row, index) => {
            html += '<tr class="hover:bg-gray-50">';
            html += `<td class="px-3 py-2 border font-mono font-bold">${row.input}</td>`;
            html += `<td class="px-3 py-2 border font-mono">${row.output}</td>`;
            html += `<td class="px-3 py-2 border text-center text-xs text-gray-500">${index}</td>`;
            
            // Individual characters without diagonal highlighting
            for (let i = 0; i < this.windowSize; i++) {
                const char = i < row.output.length ? row.output[i] : '';
                html += `<td class="px-1 py-2 border text-center font-mono">${char}</td>`;
            }
            html += '</tr>';
        });
        html += '</tbody>';
        html += '</table>';
        
        tableContainer.innerHTML = html;
    }
    
    checkAnswer() {
        const userInput = document.getElementById('userAnswer').value.trim();
        
        if (userInput === '') {
            this.showFeedback('Please enter a string.', 'warning');
            return;
        }
        
        // Check if the string has the required length
        const requiredLength = this.windowSize;
        if (userInput.length !== requiredLength) {
            this.showFeedback(
                `String must be exactly ${requiredLength} characters long. Your string has ${userInput.length} characters.`, 
                'error'
            );
            return;
        }
        
        // Check if the string contains only valid alphabet characters
        const validChars = Array.from({length: this.alphabetSize}, (_, i) => i.toString());
        const isValidString = [...userInput].every(char => validChars.includes(char));
        
        if (!isValidString) {
            this.showFeedback(
                `Invalid characters. Use only: ${validChars.join(', ')}`, 
                'error'
            );
            return;
        }
        
        // Check if it's the correct diagonal string
        if (userInput === this.diagonalString) {
            this.showFeedback(
                `Correct! "${userInput}" is the diagonalized string. This string differs from every row at its diagonal position, proving no bijection exists.`, 
                'success'
            );
            
            // Auto-generate new table after 2 seconds
            setTimeout(() => {
                this.generateNewTable();
                this.showFeedback('New challenge generated! Find the next diagonalized string.', 'info');
                setTimeout(() => {
                    document.getElementById('feedback').classList.add('hidden');
                }, 3000);
            }, 2000);
        } else {
            this.showFeedback(
                `Not quite right. The diagonalized string should be constructed by negating each diagonal element.`, 
                'error'
            );
        }
        
        document.getElementById('userAnswer').value = '';
    }
    
    showFeedback(message, type) {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.classList.remove('hidden', 'bg-green-100', 'bg-red-100', 'bg-yellow-100', 'bg-blue-100',
                                        'text-green-800', 'text-red-800', 'text-yellow-800', 'text-blue-800');
        
        switch (type) {
            case 'success':
                feedbackElement.classList.add('bg-green-100', 'text-green-800');
                break;
            case 'error':
                feedbackElement.classList.add('bg-red-100', 'text-red-800');
                break;
            case 'warning':
                feedbackElement.classList.add('bg-yellow-100', 'text-yellow-800');
                break;
            case 'info':
                feedbackElement.classList.add('bg-blue-100', 'text-blue-800');
                break;
        }
        
        feedbackElement.textContent = message;
    }
    
    updateAlphabetSize() {
        const slider = document.getElementById('alphabetSizeSlider');
        this.alphabetSize = parseInt(slider.value);
        document.getElementById('alphabetSizeValue').textContent = this.alphabetSize;
        this.updateAlphabet();
        this.generateTruthTable();
    }
    
    updateAlphabet() {
        const symbols = Array.from({length: this.alphabetSize}, (_, i) => i.toString());
        document.getElementById('alphabetDisplay').textContent = `{${symbols.join(', ')}}`;
        this.updateNegationMapping();
    }
    
    updateWindowSize() {
        const slider = document.getElementById('windowSizeSlider');
        this.windowSize = parseInt(slider.value);
        document.getElementById('windowSizeValue').textContent = this.windowSize;
        this.generateTruthTable();
        this.updateDisplay();
    }
    
    updateWindowStart() {
        const slider = document.getElementById('windowStartSlider');
        this.windowStart = parseInt(slider.value);
        document.getElementById('windowStartValue').textContent = this.windowStart;
        this.generateTruthTable();
        this.updateDisplay();
    }
    
    updateDisplay() {
        document.getElementById('windowStart').textContent = this.windowStart;
        document.getElementById('windowEnd').textContent = this.windowStart + this.windowSize - 1;
    }
    
    generateNewTable() {
        this.generateTruthTable();
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('userAnswer').value = '';
    }
}

// Global game instance
let diagonalizationDemo;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    diagonalizationDemo = new DiagonalizationDemo();
});

// Control functions
function updateAlphabetSize() {
    diagonalizationDemo.updateAlphabetSize();
}

function updateWindowSize() {
    diagonalizationDemo.updateWindowSize();
}

function updateWindowStart() {
    diagonalizationDemo.updateWindowStart();
}

function generateNewTable() {
    diagonalizationDemo.generateNewTable();
}

function checkAnswer() {
    diagonalizationDemo.checkAnswer();
}

// Allow Enter key to submit answer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userAnswer').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
});

// Floating Panel Controls

document.addEventListener('DOMContentLoaded', function() {
    // Controls panel
    const controlsButton = document.getElementById('controlsButton');
    const controlsPanel = document.getElementById('controlsPanel');
    const controlsPanelClose = document.getElementById('controlsPanelClose');
    
    // Info panel
    const infoButton = document.getElementById('infoButton');
    const infoPanel = document.getElementById('infoPanel');
    const infoPanelClose = document.getElementById('infoPanelClose');
    
    // Panel toggle functions
    function togglePanel(panel, button, otherPanel) {
        const isActive = panel.classList.contains('active');
        // Close other panel if open
        if (otherPanel && otherPanel.classList.contains('active')) {
            otherPanel.classList.remove('active');
        }
        // Toggle current panel
        if (isActive) {
            panel.classList.remove('active');
        } else {
            panel.classList.add('active');
            button.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                button.style.transform = '';
            }, 300);
        }
    }
    // Control panel events
    controlsButton.addEventListener('click', function() {
        togglePanel(controlsPanel, controlsButton, infoPanel);
    });
    controlsPanelClose.addEventListener('click', function() {
        controlsPanel.classList.remove('active');
    });
    // Info panel events
    infoButton.addEventListener('click', function() {
        togglePanel(infoPanel, infoButton, controlsPanel);
    });
    infoPanelClose.addEventListener('click', function() {
        infoPanel.classList.remove('active');
    });
    // Close panels when clicking outside
    document.addEventListener('click', function(event) {
        if (!controlsPanel.contains(event.target) && 
            !controlsButton.contains(event.target) && 
            controlsPanel.classList.contains('active')) {
            controlsPanel.classList.remove('active');
        }
        if (!infoPanel.contains(event.target) && 
            !infoButton.contains(event.target) && 
            infoPanel.classList.contains('active')) {
            infoPanel.classList.remove('active');
        }
    });
});