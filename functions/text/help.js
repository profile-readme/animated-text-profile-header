// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
import { servePage } from "../../src/text/pages.js";

export const onRequest = ({ request }) => servePage(request, "help");
