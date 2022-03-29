import { CLIEngine } from 'eslint';
import { issueCommand, issue } from '@actions/core/lib/command';

module.exports = function(results: CLIEngine.LintResult[]): string {
  issue('group', 'ESLint Annotations');

  for (const file of results.filter(r => r.messages.length > 0)) {
    for (const message of file.messages) {
      const msg = message.message + (message.ruleId ? ` (${message.ruleId})` : '');
      const severity = message.fatal || message.severity === 2 ? 'error' : 'warning';
      const args = {
        file: file.filePath.substr(process.cwd().length+1),
        line: message.line && message.line.toString(),
        col: message.column && message.column.toString(),
      };
      issueCommand(severity, args, msg);
    }
  }

  issue('endgroup');

  return '';
};
