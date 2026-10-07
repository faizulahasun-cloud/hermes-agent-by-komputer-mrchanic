# Hermes Browser Automation: Verified Current Model

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/features/browser

## Browser stack
Hermes supports Browser Use cloud, Browserbase cloud, Firecrawl cloud, Camofox local, Lightpanda local, local Chromium-family CDP connections, and packaged local Chromium through agent-browser.

The browser represents pages primarily as accessibility trees with element references, allowing navigation, clicking, typing, form filling and extraction.

## Important local/cloud distinction
- Local packaged Chromium is separate from the user's normal installed Chrome.
- /browser connect can attach to an existing Chrome/Brave/Chromium/Edge session.
- Browser sessions can be isolated by named session for concurrent work.
- Cloud browsers require provider credentials unless using the paid Nous Portal tool gateway.
- Browser Use mode executes model-written Python and therefore requires terminal access.

## Security / session distinction
Computer Use is for general desktop interaction. Browser automation is the dedicated web interaction layer, especially for signed-in browser work.
