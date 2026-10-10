// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
import { state } from "../../../src/text/handler.js";

export function onRequest({ request, env, params }) {
  const p = params.params;
  return state(request.method, env, Array.isArray(p) ? p : p ? [p] : []);
}
