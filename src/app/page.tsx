import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image
            src="/rust-logo.svg"
            alt="Rust Server Logo"
            width={50}
            height={50}
            priority
          />
          <h1 className="ml-3 text-2xl font-bold text-[#B7410E]">RUST SERVER</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-[#B7410E] transition-colors">Home</a></li>
            <li><a href="#server-info" className="hover:text-[#B7410E] transition-colors">Server Info</a></li>
            <li><a href="#rules" className="hover:text-[#B7410E] transition-colors">Rules</a></li>
            <li><a href="#connect" className="hover:text-[#B7410E] transition-colors">Connect</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 text-center bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-[#B7410E]/10 bg-opacity-20 pattern-grid-lg"></div>
        <div className="relative container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Our Rust Server</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join us for the ultimate survival experience. Build, raid, and conquer in our active community.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="steam://run/252490//+connect%162.55.96.87:28015"
              className="bg-[#B7410E] hover:bg-[#963609] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Connect Now
            </a>
            <a 
              href="https://discord.gg/nmPQ57zpbF"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Server Info Section */}
      <section id="server-info" className="py-16 px-4 bg-[#111]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Server Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#B7410E]">Server Status</h3>
              <div className="flex items-center">
                <Image
                  src="/server-status.svg"
                  alt="Server Status"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Online</span>
              </div>
              <p className="mt-3">Players: 45/100</p>
              <p>Last Wipe: July 20, 2025</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#B7410E]">Features</h3>
              <ul className="list-disc list-inside">
                <li>2x Gather Rate</li>
                <li>Active Admins</li>
                <li>Weekly Events</li>
                <li>Anti-Cheat Protection</li>
                <li>Custom Plugins</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#B7410E]">Wipe Schedule</h3>
              <p>Map: Every Thursday</p>
              <p>BP: First Thursday of the month</p>
              <p>Next Wipe: August 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Server Rules</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-3xl mx-auto">
            <ol className="list-decimal list-inside space-y-3">
              <li>No cheating or exploiting bugs</li>
              <li>No racism, sexism, or hate speech</li>
              <li>No excessive toxicity or harassment</li>
              <li>No building in blocked areas (monuments, roads)</li>
              <li>No teaming beyond group limit (max 4 players)</li>
              <li>Respect admin decisions</li>
              <li>Have fun and be respectful to other players</li>
            </ol>
            <p className="mt-6 text-sm text-gray-400">Breaking these rules may result in temporary or permanent ban from the server.</p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-16 px-4 bg-[#111]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect to Our Server</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-lg inline-block">
            <p className="mb-2">Server IP:</p>
            <code className="bg-black/30 px-4 py-2 rounded text-[#B7410E] font-mono text-lg">
              connect 162.55.96.87:28015
            </code>
            <p className="mt-6 mb-2">Or connect directly through Steam:</p>
            <a 
              href="steam://run/252490//+connect%162.55.96.87:28015"
              className="bg-[#1b2838] hover:bg-[#2a3f5a] text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Connect via Steam
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">2025 tctcl. No rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://discord.gg/nmPQ57zpbF" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B7410E]">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
