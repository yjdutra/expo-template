const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  rl.question('Enter the name for your new project: ', (projectName) => {
    if (!projectName) {
      console.error('Project name cannot be empty.');
      rl.close();
      return;
    }

    const projectSlug = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    console.log(`Configuring project: ${projectName} (slug: ${projectSlug})`);

    updateJsonFiles(projectName, projectSlug);

    console.log('Installing dependencies with npm... This might take a while.');
    const installProcess = exec('npm install');

    installProcess.stdout.pipe(process.stdout);
    installProcess.stderr.pipe(process.stderr);

    installProcess.on('close', (code) => {
      if (code !== 0) {
        console.error(`'npm install' failed with code ${code}. Please check the errors above.`);
        rl.close();
        return;
      }

      console.log('Cleaning up setup script...');
      fs.unlinkSync(__filename); 

      console.log('\n✅ Setup complete!');
      console.log('You can now start your project with: npm start');
      rl.close();
    });
  });
};

const updateJsonFiles = (appName, appSlug) => {
  const filesToUpdate = ['app.json', 'package.json'];

  filesToUpdate.forEach(fileName => {
    const filePath = path.join(__dirname, fileName);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/<APP_NAME>/g, appName);
      content = content.replace(/<APP_SLUG>/g, appSlug);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${fileName}`);
    } else {
      console.warn(`Warning: ${fileName} not found.`);
    }
  });
};

main();
