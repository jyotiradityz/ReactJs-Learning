class Solution
{
public:
    int maximumJumps(std::vector<int> &nums, int k)
    {
        int n = nums.size();
        vector<int> dp(n, INT_MIN);
        dp[0] = 0;
        for (int i = 1; i < n; i++)
        {
            for (int j = 0; j < i; j++)
            {
                if (abs(nums[i] - nums[j]) <= k)
                {
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
        }
        if (dp[n - 1] == INT_MIN)
        {
            return -1;
        }
        return dp[n - 1];
    }
};