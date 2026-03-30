import CodeBlock from '../components/CodeBlock'

export default function Ros2() {
  return (
    <div className="page">
      <h1>ROS 2 Integration</h1>
      <p className="page-intro">
        ROS 2 integration is provided by the separate{' '}
        <a href="https://github.com/Aapo2001/voice-chatbot-ros" target="_blank" rel="noopener noreferrer">
          voice-chatbot-ros
        </a>{' '}
        package. It depends on the <code>voice-chatbot</code> pip package for all core
        pipeline functionality.
      </p>

      <h2>Overview</h2>
      <p>
        The ROS 2 integration splits the pipeline into three independent nodes that
        communicate via ROS topics. This allows each component (STT, LLM, TTS) to
        run in its own process with independent resource management.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>Install the core package: <code>pip install voice-chatbot[all]</code></li>
        <li>ROS 2 Humble via Robostack (managed by pixi in the ROS repo)</li>
        <li>Clone the ROS 2 repository separately</li>
      </ul>

      <h2>Quick Start</h2>
      <CodeBlock language="bash">{`# Clone the ROS 2 package
git clone https://github.com/Aapo2001/voice-chatbot-ros.git
cd voice-chatbot-ros

# Install dependencies and build
pixi install
pixi run install-python-deps
pixi run build

# Run all nodes (STT + LLM + TTS + GUI in separate tabs)
pixi run ros-start`}</CodeBlock>

      <h2>Running Nodes</h2>

      <h3>Option A: All Four Tabs</h3>
      <p>Opens STT, LLM, TTS, and GUI in separate Windows Terminal tabs:</p>
      <CodeBlock language="bash">{`pixi run ros-start`}</CodeBlock>

      <h3>Option B: Individual Nodes</h3>
      <p>Run each node in a separate terminal (build once first):</p>
      <CodeBlock language="bash">{`pixi run ros-stt    # STT node: mic + VAD + Whisper
pixi run ros-llm    # LLM node: LLaMA chat inference
pixi run ros-tts    # TTS node: Coqui TTS + audio playback
pixi run ros-app    # PySide6 GUI (connects to running nodes)`}</CodeBlock>

      <h3>Option C: Launch File</h3>
      <p>Run all three processing nodes in one process group:</p>
      <CodeBlock language="bash">{`pixi run ros-launch`}</CodeBlock>

      <h2>Node Architecture</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Node</th><th>File</th><th>Responsibilities</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>STT Node</strong></td>
              <td><code>voice_chatbot_ros/stt_node.py</code></td>
              <td>Microphone capture, VAD processing, Whisper transcription. Publishes recognized text.</td>
            </tr>
            <tr>
              <td><strong>LLM Node</strong></td>
              <td><code>voice_chatbot_ros/llm_node.py</code></td>
              <td>Receives transcribed text, runs LLaMA inference, publishes response text.</td>
            </tr>
            <tr>
              <td><strong>TTS Node</strong></td>
              <td><code>voice_chatbot_ros/tts_node.py</code></td>
              <td>Receives response text, synthesizes speech with Coqui TTS, plays audio.</td>
            </tr>
            <tr>
              <td><strong>GUI Node</strong></td>
              <td><code>voice_chatbot_ros/ros_app.py</code></td>
              <td>PySide6 interface that subscribes to all topics for visualization and control.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <h4>Dependency</h4>
        <p>
          The ROS 2 nodes import pipeline modules (Config, AudioIO, VAD, STT, LLM, TTS) from
          the <code>voice-chatbot</code> pip package. Install it first
          with <code>pip install voice-chatbot[all]</code>.
        </p>
      </div>

      <div className="callout">
        <h4>Repository</h4>
        <p>
          Full setup instructions, build tools, and the launch file are in the{' '}
          <a href="https://github.com/Aapo2001/voice-chatbot-ros" target="_blank" rel="noopener noreferrer">
            voice-chatbot-ros
          </a>{' '}
          repository.
        </p>
      </div>
    </div>
  )
}
