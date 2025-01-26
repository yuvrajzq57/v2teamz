import React, { useState, useEffect, useRef } from 'react';

/**
 * A helper component that types out a single chunk (string) character by character
 * if `typed` is true. It also replaces '\n' with <br/> for multi-line chunks.
 */
function TypedLine({ lineObj }) {
  const { text, typed } = lineObj;

  // If not typed, just show the full text immediately.
  const [displayText, setDisplayText] = useState(typed ? '' : text);

  useEffect(() => {
    if (!typed) return; // If typed = false, show entire text instantly.

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 30); // typing speed in ms

    return () => clearInterval(interval);
  }, [typed, text]);

  // Convert '\n' to line breaks for multi-line typed text
  const renderedText = displayText.split('\n').map((chunk, idx) => (
    <React.Fragment key={idx}>
      {chunk}
      <br />
    </React.Fragment>
  ));

  return <>{renderedText}</>;
}

/**
 * A custom hook that types out an array of lines (for the FIRST terminal)
 * one character at a time, line by line.
 */
function useTypingEffect(lines, typingSpeed = 50) {
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentLinePartial, setCurrentLinePartial] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsDone(true);
      return;
    }

    const interval = setInterval(() => {
      const line = lines[currentLineIndex];
      setCurrentLinePartial((prev) => prev + line.charAt(currentCharIndex));
      setCurrentCharIndex((prev) => prev + 1);

      if (currentCharIndex + 1 === line.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTypedLines((prev) => [...prev, line]);
          setCurrentLinePartial('');
          setCurrentCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        }, 400);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [lines, typingSpeed, currentLineIndex, currentCharIndex]);

  return {
    typedLines,
    currentLinePartial,
    isDone
  };
}

const Introduction = () => {
  //
  // 1) FIRST TERMINAL (Typed Effect)
  //
  const linesBox1 = [
    "Welcome to TeamZ's environment. The second terminal is fully interactive!",
    "Check your hacking skills by using tools like nmap on www.zteam.in (cmd : nmap www.zteam.in)",
  ];
  const box1Typing = useTypingEffect(linesBox1, 40);

  //
  // 2) SECOND TERMINAL (Interactive)
  //
  // We store each “line” as an object: { text: "...", typed: bool }
  const [terminalLines, setTerminalLines] = useState([
    { text: "Welcome to TeamZ's Interactive Terminal!", typed: false },
    { text: "Type 'help' for a list of available commands.", typed: false },
  ]);

  const [typedCommand, setTypedCommand] = useState('');
  const editableRef = useRef(null);

  // Called when user presses Enter in the second terminal
  const handleCommand = (commandString) => {
    const trimmed = commandString.trim().toLowerCase();

    // Show the user's typed command immediately (typed = false)
    if (trimmed) {
      setTerminalLines((prev) => [
        ...prev,
        { text: `> ${commandString}`, typed: false },
      ]);
    }
    if (!trimmed) return;

    switch (trimmed) {
      case 'help':
        addTypedChunks([
`  Available commands:
help - Show available commands
about - Learn about TeamZ
nmap - For scanning of the domain
zcpent - Info on zCPENT certification
clear - Clear the terminal`
        ]);
        break;

      case 'about':
        addTypedChunks([
`  TeamZ is a cybersecurity training and Innovation company with industry recognized certification & training`
        ]);
        break;

      case 'nmap www.zteam.in':
        addTypedChunks([
`  Starting Nmap 7.93 ( https://nmap.org ) at 2025-01-23 12:34 UTC
Nmap scan report for zteam.in (203.0.113.45)
Host is up (0.052s latency).
rDNS record for 203.0.113.45: examplehost.provider.net

PORT    STATE  SERVICE     VERSION
80/tcp  open   http        Apache httpd 2.4.54
443/tcp open   ssl/https   Apache httpd 2.4.54

Service Info: Host: zteam.in; OS: Linux

Nmap done: 1 IP address (1 host up) scanned in 3.21 seconds`
        ]);
        break;

      case 'zcpent':
        addTypedChunks([
`zCPENT is our advanced penetration testing certification for seasoned professionals.`
        ]);
        break;

      case 'clear':
        setTerminalLines([]);
        break;

      default:
        addTypedChunks([
`  Unknown command: "${trimmed}". Type 'help' for options.`
        ]);
    }
  };

  // Helper to add typed chunks so each chunk
  // finishes before the next line appears
  function addTypedChunks(chunks) {
    const typedObjects = chunks.map((c) => ({ text: c, typed: true }));
    setTerminalLines((prev) => [...prev, ...typedObjects]);
  }

  // Key handler for Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const text = e.currentTarget.textContent;
      handleCommand(text);
      setTypedCommand('');
      if (editableRef.current) {
        editableRef.current.textContent = '';
      }
    }
  };

  const handleInput = (e) => {
    setTypedCommand(e.currentTarget.textContent);
  };

  return (
    <section style={styles.introSection} id="introduction">
      <h2 style={styles.heading}>
        innovate
        <span style={{ color: 'orange' }}>.</span>
        hack
        <span style={{ color: 'orange' }}>.</span>
        secure
      </h2>
      <div style={styles.terminalsContainer}>
        {/* FIRST Terminal */}
        <div style={styles.terminalBox}>
          <div style={styles.terminalHeader}>
            <div style={{ ...styles.circle, ...styles.circleRed }} />
            <div style={{ ...styles.circle, ...styles.circleYellow }} />
            <div style={{ ...styles.circle, ...styles.circleGreen }} />
          </div>
          <div style={styles.terminalContent}>
            {box1Typing.typedLines.map((line, idx) => (
              <p key={idx}>
                <span style={styles.prompt}>terminal@teamZ:~ </span>
                {line}
              </p>
            ))}
            {!box1Typing.isDone && (
              <p>
                <span style={styles.prompt}>terminal@teamZ:~ </span>
                {box1Typing.currentLinePartial}
              </p>
            )}
          </div>
        </div>

        {/* SECOND Terminal (Interactive) */}
        <div style={{ ...styles.terminalBox, ...styles.fixedHeightTerminal }}>
          <div style={styles.terminalHeader}>
            <div style={{ ...styles.circle, ...styles.circleRed }} />
            <div style={{ ...styles.circle, ...styles.circleYellow }} />
            <div style={{ ...styles.circle, ...styles.circleGreen }} />
          </div>
          <div style={styles.scrollableContent}>
            {terminalLines.map((lineObj, idx) => {
              const isUserLine = lineObj.text.startsWith('> ');
              const content = isUserLine ? lineObj.text.slice(2) : lineObj.text;

              return (
                <p key={idx}>
                  {isUserLine && (
                    <span style={styles.prompt}>terminal@teamZ:~ </span>
                  )}
                  <TypedLine lineObj={{ text: content, typed: lineObj.typed }} />
                </p>
              );
            })}

            {/* Live input (no cursor) */}
            <div style={styles.liveLine}>
              <span style={styles.prompt}>terminal@teamZ:~ </span>
              <div
                ref={editableRef}
                contentEditable="true"
                style={styles.contentEditable}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline CSS with responsiveness
const styles = {
  introSection: {
    padding: '40px',
    backgroundColor: '#555',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    padding: '20px',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#fff',
    fontSize: '2rem',
  },
  terminalsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap', // Wraps terminals for smaller screens
  },
  terminalBox: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    borderRadius: '8px',
    width: 'min(500px, 90%)', // Adjust width for smaller screens
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    fontFamily: 'monospace',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minWidth: '280px', // Ensures minimum width on smaller screens
  },
  fixedHeightTerminal: {
    height: '300px',
    overflow: 'hidden',
  },
  terminalHeader: {
    backgroundColor: '#333',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  circle: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  circleRed: {
    backgroundColor: '#ff605c',
  },
  circleYellow: {
    backgroundColor: '#ffbd44',
  },
  circleGreen: {
    backgroundColor: '#00ca4e',
  },
  terminalContent: {
    padding: '1rem',
    lineHeight: 1.5,
    overflowY: 'auto',
    flex: 1,
  },
  scrollableContent: {
    padding: '1rem',
    lineHeight: 1.5,
    overflowY: 'auto',
    flex: 1,
  },
  prompt: {
    color: 'limegreen',
    marginRight: '6px',
  },
  liveLine: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  contentEditable: {
    outline: 'none',
    marginLeft: '4px',
    minWidth: '100px',
    color: '#fff',
  },
};

export default Introduction;