# Component runtime assets

Static browser runtime for the approved ColorMixer template. It reads `data-root` and `data-markup` from its script element, validates one ColorMixer tag and mounts the fixed component. It makes no API calls and contains no credentials.

The runtime is a prototype, not a complete plugin release. One native ChatGPT web fixture loaded the commit-pinned asset with Subresource Integrity and its three sliders updated the color. No latency or model-token benchmark is claimed.

Use a full Git commit in the jsDelivr URL and the integrity value in `manifest.json`. Reviewed runtime commit: `fb15eeffbeaf7bec4b9d9cc6d7f77afac9ee8243`.

Only the static runtime, checksum manifest and this README are published. No MCP server, deployment configuration, credentials, private repository history or QA conversation data is included.
