//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 500;
ProgressBar.init(
  [ 'Received by Hobb',
    'Awaiting additional inputs',
    'Work initiated',
    'Model creation in progress',
    'Texture and material creation in progress',
    'Low fidelity Asset completed',
    'High fidelity Asset completed',
    'Silos In Progress',
    '360º Spins in Progress',
    'Silo/360º Drafts shared',
    'Feedback pending',
    'Iteration in progress',
    'Feedback pending',
    'Final in progress',
    'Final delivered ',
    'Completed'
  ],
  'Feedback pending',
  'progress-bar-wrapper3' // created this optional parameter for container name (otherwise default container created)
);
