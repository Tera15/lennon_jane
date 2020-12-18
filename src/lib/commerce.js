// src/lib/commerce.js

import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.NEXT_PUBLIC_COMMERCEJS_PUBLIC_KEY,
  true
);
