import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Voice Activity Detection',
    desc: 'Silero-VAD with energy gating and pre-buffering for accurate speech detection.',
    icon: '~',
  },
  {
    title: 'Speech-to-Text',
    desc: 'CTranslate2-based Whisper via faster-whisper with CUDA acceleration.',
    icon: '>',
  },
  {
    title: 'LLM Chat',
    desc: 'Multi-turn conversations powered by LLaMA GGUF models via llama-cpp-python.',
    icon: '#',
  },
  {
    title: 'Text-to-Speech',
    desc: 'Natural voice synthesis with Coqui TTS and espeak-ng phonemisation. Toggleable on/off.',
    icon: ')',
  },
  {
    title: 'Desktop GUI',
    desc: 'PySide6 (Qt 6) interface with voice and text input, settings sidebar, and system log.',
    icon: '[',
  },
  {
    title: 'Easy Install',
    desc: 'Available on PyPI. One command to install, one to download models, one to run.',
    icon: '$',
  },
]

export default function Home() {
  return (
    <div className="page">
      <div className="hero-section">
        <h1>Voice Chatbot</h1>
        <p className="hero-subtitle">
          A local speech-to-speech voice assistant with PySide6 GUI and CLI.
          Fully offline, GPU-accelerated, and privacy-first.
        </p>
        <div className="hero-actions">
          <Link to="/quick-start" className="btn btn-primary">Get Started</Link>
          <Link to="/architecture" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>

      <div className="pipeline-section">
        <h2>Install from PyPI</h2>
        <div className="pipeline-diagram">
          <pre style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
{`pip install voice-chatbot[all]
voice-chatbot-setup-models
voice-chatbot-app`}
          </pre>
        </div>
      </div>

      <div className="pipeline-section">
        <h2>Install from source (pixi)</h2>
        <div className="pipeline-diagram">
          <pre style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
{`git clone https://github.com/Aapo2001/python-chatbot.git
cd python-chatbot
pixi install
pixi run install-python-deps
pixi run setup-models
pixi run app`}
          </pre>
        </div>
      </div>

      <div className="pipeline-section">
        <h2>Pipeline Overview</h2>
        <div className="pipeline-diagram">
          <div className="pipeline-flow">
            <span className="pipeline-node">Microphone</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">AudioIO</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">VAD</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">STT</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">LLM</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">TTS</span>
            <span className="pipeline-arrow" />
            <span className="pipeline-node">Speaker</span>
          </div>
          <p className="pipeline-note">
            After playback, the audio queue is cleared and VAD is reset to prevent self-triggering.
          </p>
        </div>
      </div>

      <h2>Features</h2>
      <div className="feature-grid">
        {features.map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {[
            ['Python 3.11', 'Runtime'],
            ['PySide6', 'Qt 6 GUI'],
            ['silero-vad', 'Voice Detection'],
            ['faster-whisper', 'Speech-to-Text'],
            ['llama-cpp-python', 'LLM Inference'],
            ['Coqui TTS', 'Text-to-Speech'],
            ['sounddevice', 'Audio I/O'],
            ['PyPI', 'Package Distribution'],
            ['pixi', 'Package Manager'],
            ['CUDA', 'GPU Acceleration'],
          ].map(([name, role]) => (
            <div key={name} className="tech-item">
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-stack">
        <h2>Related Projects</h2>
        <div className="tech-grid">
          {[
            ['voice-chatbot-ros', 'ROS 2 Humble integration'],
            ['voice-chatbot-docs', 'This documentation site'],
          ].map(([name, role]) => (
            <div key={name} className="tech-item">
              <a href={`https://github.com/Aapo2001/${name}`} target="_blank" rel="noopener noreferrer">
                <strong>{name}</strong>
              </a>
              <span>{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
