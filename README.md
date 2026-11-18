# Component runtime assets

Static browser runtime for the approved ColorMixer template. It reads `data-root` and `data-markup` from its script element, validates one ColorMixer tag and mounts the fixed component. It makes no API calls and contains no credentials.

The runtime is a prototype, not a complete plugin release. One native ChatGPT web fixture loaded the commit-pinned asset with Subresource Integrity and its three sliders updated the color. No latency or model-token benchmark is claimed.

Use a full Git commit in the jsDelivr URL and the integrity value in `manifest.json`. Reviewed runtime commit: `fb15eeffbeaf7bec4b9d9cc6d7f77afac9ee8243`.

Only the static runtime, checksum manifest and this README are published. No MCP server, deployment configuration, credentials, private repository history or QA conversation data is included.

## Optimized standalone entry

`c.js` creates its own adjacent mount. Default native content:

```html
<script src="//cdn.jsdelivr.net/gh/TomasDelon/component-runtime-assets@00f1c3918625/c.js" integrity="sha256-t0YxH9+mswPbnxtIUSNx3lmGn8ptX0ZVBIsHIo/GZCQ=" crossorigin></script>
```

Optional `data-ui` supplies one escaped ColorMixer tag; the same compiler validates properties and escapes title text. Source requires no container/root identifier. The 12-character commit prefix was verified through jsDelivr and the full SRI hash pins the content. The default source is 175 bytes, excluding the host envelope. Actual ChatGPT fixtures covered defaults, custom RGB/title, all sliders, separate instances and a 375px browser viewport. No model-token or latency benchmark is claimed.
