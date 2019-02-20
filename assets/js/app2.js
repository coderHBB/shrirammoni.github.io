//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 500;
ProgressBar.init(
  [ 'Received by Hobb',
    'Awaiting additional inputs',
    'Work initiated',
    'Asset creation in progress',
    'Scene setup in progress',
    'Drafts shared',
    'Feedback pending',
    'Iteration in progress',
    'Iterations Shared',
    'Feedback pending',
    'Final in progress',
    'Final Shared',
    'Final delivered',
    'Completed'
  ],
  'Completed',
  'progress-bar-wrapper2' // created this optional parameter for container name (otherwise default container created)
);
