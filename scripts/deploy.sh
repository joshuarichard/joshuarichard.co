#!/usr/bin/env bash
set -euo pipefail

BUCKET="joshuarichard.co"
DISTRIBUTION_ID="E1LXK9MTZQVRXB"

echo "Building..."
yarn build

echo "Syncing to S3..."
aws s3 sync dist/ "s3://${BUCKET}" --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*" \
  --output text

echo "Deploy complete."
