Part I - Intermediate terminal exrecises
Answer the following questions:

1. Create an environment variable called FIRST_NAME and set it equal to your first name (this does not need to be permanent)
2. Print the FIRST_NAME variable
3. Print out the $PATH variable
4. What is the $PATH variable?
5. Why would you want to create an environment variable?
6. How do you permanently save environment variables?
7. What is a process?
8. How do you list all processes running on your machine?
9. What is a PID?
10. How do you terminate a process?
11. What is the difference between kill and kill -9?
12. What grep flag allows for case insensitive search?
13. What grep flag allows for a certain number of lines before the match?
14. What grep flag allows for a certain number of lines around the match?
15. What grep flag allows for a certain number of lines after the match?
16. What grep flag allows for full word search?
17. What grep flag shows you the line number of a match?

Answers
Questions 1-3 are shown in the image exercise1 found in this folder.

4. The path is a set of environmental variables that hold locations for different executable commands/programs.
5. An environmental variable can be created to help keep a path for all your project directories.
6. Environmental variables are permanently stored by creating them in your configuration file. (This is a .bash_profile file if you are running bash.)
7. A process refers to a particular task or program being executed or that is running on your machine at a particular time.
8. We use the ps aux command.
9. A PID is unique identifier usually a number that is used to reference a process when you want to kill it or stop it from running.
10. We use the kill <PID>
11. A kill is used to stop a process while a kill -9 is used to force stop a process in the case where a kill does not work.
12. The -i flag helps us for case insensitive search
13. The -B flag displays a certain number of lines before the search.
14. The -C flag displays a certain number of lines around the match.
15. The -A flag displays a certain number of lines after the match.
16. The -w flag allows for a full word count
17. The -n flag shows the line number of a match.
