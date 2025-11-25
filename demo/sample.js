/*
Simple demo: simulate agent decision logic locally.
This is a sanitized, non-sensitive example.
*/
const simulate = () => {
  return {
    shipmentId: "SAMPLE-001",
    issue: "delay",
    suggestedAction: "contact vendor; re-route next batch",
    confidence: 0.87
  };
};

console.log("Advyo sample simulation:", simulate());

