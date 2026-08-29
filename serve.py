#!/usr/bin/env python3
import http.server
import io
import os
import sys


class FallbackHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        exists = os.path.isdir(path) or os.path.isfile(path)
        if not exists:
            with open(os.path.join(os.getcwd(), "404.html"), "rb") as f:
                body = f.read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            return io.BytesIO(body)
        return super().send_head()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    http.server.test(HandlerClass=FallbackHandler, port=port)
