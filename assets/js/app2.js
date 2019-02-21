//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 500;
ProgressBar.init(
  [ 'Received by Hobb',
    'Awaiting additional inputs',
    'Asset creation',
    'Scene setup',
    'Drafts shared',
    'Iteration',
    'Iterations Shared',
    'Final',
    'Final Shared',
    'Final delivered'
  ],
  'Asset creation',
  'progress-bar-wrapper2' // created this optional parameter for container name (otherwise default container created)
);
