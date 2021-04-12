# Part I

Answer the following questions:
1.	What does git clean do?
    * The git clean command is used to remove untracked or unmerged files from the working directory

2.	What do the -d and -f flags for git clean do?
    * The -d flag helps git to recurse into untracked directories, while the -f flag force removes a file or directory.

3.	What git command creates a branch?
    * git checkout -b {name-of--new-branch}

4.	What is the difference between a fast-forward and recursive merge?
    * A fast forward merge, the commit history s just one line such that there are no new merges on the master branch while in recursive merge there are some new commits on the master branch. 

5.	What git command changes to another branch?
    * git checkout {name-of-branch}

6.	How do you remove modified or deleted files from the working directory?
    * git checkout

7.	What git command deletes a branch?
    * git branch -D {name-of-branch}

8.	What does the git diff command do?
    * The git diff command shows the difference betwen two commits.

9.	How do you remove files from the staging area?
    * git rm --cached {name-of-file}

10.	How do merge conflicts happen?
    * Merge conflicts happen when there are multiple commits on the same file and git cannot determine which to merge.

