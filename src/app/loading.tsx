export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo/spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-cyber-border" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyber-accent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyber-cyan animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
        </div>
        <div className="text-sm font-mono text-gray-500">
          <span className="text-cyber-accent">&gt;</span> Loading...
        </div>
      </div>
    </div>
  );
}
