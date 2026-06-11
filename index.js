const fetch = require('node-fetch');

const COUPON_URL = 'https://bypassgpt.ai/?ref=zdq5zmm';
const API_BASE = 'https://api.bypassgpt.ai/v1';

function callBypassgpt(endpoint, options = {}) {
  return fetch(`${API_BASE}${endpoint}`, options)
    .then((res) => {
      if (!res.ok) return Promise.reject(new Error(`HTTP ${res.status}`));
      return res.json();
    });
}

function checkStatus() {
  return callBypassgpt('/status', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
}

console.log(`Deal page: ${COUPON_URL}`);
checkStatus()
  .then((data) => console.log('Status:', JSON.stringify(data, null, 2)))
  .catch((err) => console.error('API error:', err.message));
