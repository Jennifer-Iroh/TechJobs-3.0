# Part I

Answer the following questions:

1.	What is the difference between git reset and git revert. When would you use one over the other?
    * git reset changes which commit a branch head is currently pointing at which also alters existing history by changing the commit that a branch references while git revert creates a new commit that undoes the changes from a previous commit. 

2.	What is the difference between git merge and git rebase. When would you use one over the other?
    * git merge adds a new commit and preserves the commit history while a git rebase adds a feature branch on top of the master branch. Git merge is used when you want to keep the commit history of a set of commits while rebase is used to preserve a linear (single) commit history.

3.	What is the difference between git stash pop and git stash apply. When would you use one over the other?
    * git stash pop moves the latest stashed change back into the working directory and removes it from the list while git stash apply moves the latest stashed change back into the working directory and keeps it on the list. 

4.	What kinds of things can you do in interactive mode when rebasing?
    * We can keep commits, edit commit messages, edit commits,squash or fixup the commit to turn a bunch of commits into one, and remove commits.

