Approach
---------
I used a generator function to build out each individual path.

The solution is naïve to any available loot on the map and where it may be. So as the map gets larger, perhaps it would be better to use a smarter
search such as A*.

Out of full transparency, there was a moment I thought I needed to memoize the path taken in some way, but thinking through the problem more, I realized
that allowing the path to re-tread itself (to get to a new discovered part of the map) could create the most highest loot collection. So I didn't include that.

Small example of the above point, if the algorithm is forced to get a high point reward at a block, but its surrounded by whirlpools (except by the direction which it was discovered), then by limiting the algorithm to only go to "new" ground, we'd be stuck in the trap we've set for ourselves.