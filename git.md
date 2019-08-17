# Git - Distribute your problems away - some change

Git is a source control system designed to make complicated version control simple for projects of any size

## Why Git?

Modern day projects require collaboration between many developers who have different visions for how a project should be built.
A healthy development cycle requires the ability to keep track of what progress is being made, allow for changes to be reviewed
prior to being pushed to the master branch, and roll back changes that break a project. Git has proven itself as the most lightweight
version control software avilable while giving developers every tool necessary for proper version control.

## How does it work?

A git repository without branches is similar to a linked list. It can be seen as a series of nodes where the most recent node is referred to as HEAD. When a commit is made to a git repository, a new node is created in the list containing any changes made to the repository and the new node becomes HEAD.

## Installing Git

Git is open source and can be installed directly from the [Git website](https://git-scm.com/downloads)

## Basic Use Cases

### Init
>git init

`init` will create an empty repository.

### Status

>git status

`status` will show any changes that have been made to the repository since the last commit. Git will notify you of files which have been
added or deleted, as well as files which have been modified.

### Diff

>git diff `HelloWorld.rs`

`diff`, like status, will display changes that have been made to the repository since the last commit. `status` will display this in the form
of a list of files, while `diff` will show the exact changes made to each line. Supplying `diff` with the name of a file will display the line
changes in that file.

### Add
>git add .

`add` will add the specified files to the index, meaning it will stage them for a commit. The above command will add every modified file in the
current directory, which is every file in the project if you are in the top-level directory of the project. `git add -A` does the same thing. You can supply `add` with a single file if you only want to update a single file, like `git add HelloWorld.rs`.

### Commit
>git commit -m "First commit"

`commit` will create a new commit, adding all staged changes to the repository. The `-m` flag allows you to attach a message to the commit explaining what change was made. If you do not supply a messgae, git will open a prompt in a text editor for you to write a message (which is Vim by default).

### .gitignore

`.gitignore` is a file that should be included in every Git repository. It specifies the files that Git should ignore. You can put specific files in `.gitignore`, like `someFile.txt`, or specify a pattern to include multiple files, like `*.txt`, which will ignore every text file in the repository.
1. Slimming down the repo - Files/folders should be gitignored when they contain data that doesn't need to be included in version control. For example, a `node_modules` folder for a node project would add thousands of files and hundreds of megabytes that are not needed as the folder can be re-built with command when you pull the repository.
2. Data security - Many projects now contain tokens, API keys, passwords, and other data that should not be available to the public or anybody who has access to the repository. You can, for example, place all of your tokens and keys in a file called `auth.json` and then add `auth.json` to your `.gitignore`.

## Branching out

Including branches is a key part of using Git to collaborate with others, review changes before they become part of the project, and experimenting without breaking anything. When a git repository is created, it has one branch which is called Master. Creating a new branch will copy the current branch and create a new one. Any changes made to the new branch will not affect any other branch until they are merged.

### Branch
>git branch myBranch

`branch` can be used to create a new branch, see what branches are part of a repository, and delete branches. The above command will create a new branch called `myBranch`. The current branches can be viewed with the `-a` flag and a branch can be deleted with the `-d` flag (like `git branch -d myBranch`)

### Checkout
>git checkout myBranch

`checkout` is used to switch between branches. When you use the command, git will check to see if any changes have been made to the current repository. If there are un-committed changes, git will prevent you from checking out the branch and ask you to take care of the current changes. If there are no pending changes, then HEAD is moved from the current branch to the specified branch. The `-b` flag can be used to specify that you want to create a new branch and check it out, like `git checkout -b newBranch`.

### Merge
>git merge myBranch

`merge` will merge the specified branch into the current branch. If we use the above command while on the Master branch, myBranch will be merged into Master. This will take every commit made to myBranch since it diverged from Master and add those commits to Master.

## Creating a GitHub Repository

[GitHub](https://github.com/) is the most popular public Git host, with the second most popular being [GitLab](https://about.gitlab.com/). Github allows you to create repositories which are available online for collaborative work, moving a project between computers, and showcasing your projects.

### Push
>git push

`push` will update the current remote repository with any changes that have been made locally, including any commits or changes to the repository's branches.

### Pull
>git pull

`pull` is similar to `push`, except it retrieves all changes made to the remote repository and applies them to the local repository.