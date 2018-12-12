# Dynamically creates environment variables at runtime
echo "window.ENV = `jo \`env | grep REACT_APP_\` end=1`" > /usr/share/nginx/html/env.js
nginx -g "daemon off;"
