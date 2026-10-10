// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
import { badge } from "../../src/text/handler.js";

export function onRequest({ request, env, params }) {
  const p = params.params;
  return badge(request.method, env, Array.isArray(p) ? p : p ? [p] : [], {}, new Date(), new URL(request.url).searchParams.get("text"));
}
