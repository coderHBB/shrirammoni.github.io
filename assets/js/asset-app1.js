//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 500;
ProgressBar.init(
  [ 'Received by Hobb',
    'Awaiting additional inputs',
    'Modelling',
    'Texturing',
    'Low Poly',
    'High Poly',
    'Silos',
    '360º Spins',
    'Silo/360º Drafts shared',
    'Iteration',
    'Final',
    'Final delivered '
  ],
  'Silos',
  'progress-bar-wrapper3' // created this optional parameter for container name (otherwise default container created)
);
