export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-opacity-20" style={{
      backgroundColor: 'var(--terminal-alt)',
      borderColor: 'var(--terminal-green)'
    }}>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500" style={{ backgroundColor: 'var(--terminal-green)' }}></div>
      </div>
      <div className="terminal-arg text-sm font-medium">hiro@terminal:~$</div>
      <div className="w-12"></div>
    </div>
  );
}
