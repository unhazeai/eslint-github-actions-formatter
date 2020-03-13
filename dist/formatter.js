"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@actions/core/lib/command");
module.exports = function (results) {
    command_1.issue('group', 'ESLint Annotations');
    for (const file of results.filter(r => r.messages.length > 0)) {
        for (const message of file.messages) {
            const msg = `${message.message} (${message.ruleId})`;
            const severity = message.fatal || message.severity === 2 ? 'error' : 'warning';
            const args = {
                file: file.filePath.substr(process.cwd().length + 1),
                line: message.line.toString(),
                col: message.column.toString(),
            };
            command_1.issueCommand(severity, args, msg);
        }
    }
    command_1.issue('endgroup');
    return '';
};
