import CodeBlock from '../components/CodeBlock'

export default function QuickStart() {
  return (
    <div className="page">
      <h1>Quick Start</h1>
      <p className="page-intro">
        Get the voice chatbot running on your machine in a few minutes.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li><strong>Python 3.11+</strong></li>
        <li><strong>CUDA-capable GPU</strong> recommended for real-time inference (works on CPU too, but slower)</li>
        <li><strong>espeak-ng</strong> &mdash; required for Coqui TTS phonemisation
          <ul>
            <li>Windows: Download from <a href="https://github.com/espeak-ng/espeak-ng/releases" target="_blank" rel="noopener noreferrer">GitHub releases</a> and install to <code>C:\Program Files\eSpeak NG</code></li>
            <li>Linux: <code>sudo apt install espeak-ng</code></li>
          </ul>
        </li>
        <li><strong>CUDA toolkit</strong> (optional) &mdash; DLL path defaults to <code>D:\cuda</code> (override with <code>CUDA_PATH</code> env var)</li>
      </ul>

      <h2>Option A: Install from PyPI (recommended)</h2>
      <p>The easiest way to get started. Install the package and all dependencies in one command:</p>
      <CodeBlock language="bash">{`# 1. Install the package with all components
pip install voice-chatbot[all]

# 2. Download AI models (LLM, Whisper, VAD, TTS)
voice-chatbot-setup-models

# 3. Launch the desktop GUI
voice-chatbot-app`}</CodeBlock>

      <div className="callout">
        <h4>Optional dependency groups</h4>
        <p>
          Instead of <code>[all]</code>, you can install only the components you need:
        </p>
        <ul>
          <li><code>pip install voice-chatbot[stt]</code> &mdash; Speech-to-text (faster-whisper)</li>
          <li><code>pip install voice-chatbot[llm]</code> &mdash; LLM chat (llama-cpp-python)</li>
          <li><code>pip install voice-chatbot[tts]</code> &mdash; Text-to-speech (coqui-tts)</li>
          <li><code>pip install voice-chatbot[vad]</code> &mdash; Voice activity detection (silero-vad)</li>
          <li><code>pip install voice-chatbot[gui]</code> &mdash; PySide6 desktop GUI</li>
          <li><code>pip install voice-chatbot[all]</code> &mdash; Everything above</li>
        </ul>
      </div>

      <h2>Option B: Install from source</h2>
      <p>For development or if you want to modify the code:</p>
      <CodeBlock language="bash">{`# Clone the repository
git clone https://github.com/Aapo2001/python-chatbot.git
cd python-chatbot

# Using pixi (recommended for development)
pixi install
pixi run install-python-deps
pixi run setup-models
pixi run app

# Or using pip directly
pip install -e ".[all]"
voice-chatbot-setup-models
voice-chatbot-app`}</CodeBlock>

      <h2>Available commands</h2>
      <p>After installation, three commands are available:</p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Command</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>voice-chatbot-app</code></td><td>Launch the PySide6 desktop GUI</td></tr>
            <tr><td><code>voice-chatbot</code></td><td>Run the headless CLI voice assistant</td></tr>
            <tr><td><code>voice-chatbot-setup-models</code></td><td>Download and validate all AI models</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Model setup</h2>
      <p>
        The <code>voice-chatbot-setup-models</code> command downloads all required AI models
        to a local <code>models/</code> directory:
      </p>
      <ul>
        <li><strong>Silero-VAD</strong> &mdash; voice activity detection model (~2 MB)</li>
        <li><strong>Whisper</strong> &mdash; speech recognition model (size depends on <code>whisper_model</code> setting)</li>
        <li><strong>LLaMA GGUF</strong> &mdash; local LLM for chat (~4.6 GB for the default Q4_K_M quantization)</li>
        <li><strong>Coqui TTS</strong> &mdash; text-to-speech model (downloaded from model zoo on first use)</li>
      </ul>

      <h2>First run</h2>
      <ol>
        <li>Run <code>voice-chatbot-app</code> to open the GUI</li>
        <li>Click <strong>Käynnistä</strong> (Start) to begin the voice assistant</li>
        <li>Speak into your microphone &mdash; the chatbot will listen, transcribe, respond, and speak back</li>
        <li>You can also type messages in the text input bar at the bottom</li>
        <li>Toggle TTS on/off in the settings sidebar without restarting</li>
        <li>Click <strong>Pysäytä</strong> (Stop) to stop the assistant</li>
      </ol>

      <h2>Platform notes</h2>

      <div className="callout">
        <h4>Windows</h4>
        <p>
          Primary development platform. CUDA DLLs are loaded automatically before GPU imports.
          The default CUDA path is <code>D:\cuda</code> (override with <code>CUDA_PATH</code> environment variable).
          Install espeak-ng to <code>C:\Program Files\eSpeak NG</code>.
        </p>
      </div>

      <div className="callout">
        <h4>Linux</h4>
        <p>
          Fully supported. Install <code>espeak-ng</code> system-wide with your package manager.
          CUDA is detected automatically if installed.
        </p>
      </div>

      <div className="callout">
        <h4>CPU-only mode</h4>
        <p>
          The chatbot works without a GPU but inference will be significantly slower.
          If CUDA is not available, a warning is shown and all models run on CPU.
        </p>
      </div>

      <h2>Troubleshooting</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Issue</th><th>Solution</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ImportError: isin_mps_friendly</code></td>
              <td>Upgrade to <code>voice-chatbot&gt;=0.1.3</code> which patches transformers 5.x compatibility</td>
            </tr>
            <tr>
              <td>espeak-ng not found</td>
              <td>Install espeak-ng and ensure it&apos;s on your PATH (Windows: <code>C:\Program Files\eSpeak NG</code>)</td>
            </tr>
            <tr>
              <td>CUDA not available warning</td>
              <td>Install the CUDA toolkit and set <code>CUDA_PATH</code> to point to your installation</td>
            </tr>
            <tr>
              <td>Model download fails</td>
              <td>Check your internet connection and run <code>voice-chatbot-setup-models</code> again</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
