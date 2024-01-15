 #include<bits/stdc++.h>
 using namespace std;
 vector<vector<int>> output;
 void find(vector<int>nums,int n,int target){
        sort(nums.begin(), nums.end());
        set<vector<int>> set;
        for(int i=0; i<n-3; i++){
            for(int j=i+1; j<n-2; j++){
                long long newTarget = (long long)target - (long long)nums[i] - (long long)nums[j];
                int low = j+1, high = n-1;
                while(low < high){
                    if(nums[low] + nums[high] < newTarget){
                        low++;
                    }
                    else if(nums[low] + nums[high] > newTarget){
                        high--;
                    }
                    else{
                        set.insert({nums[i], nums[j], nums[low], nums[high]});
                        low++; high--;
                    }
                }
            }
        }
        for(auto it : set){
            output.push_back(it);
        }
    }
 int main(){
    int n;
    cin>>n;
    int target;
    cin>>target;
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    find(arr,n,target);
    for(int i=0;i<output.size();i++){
        for(int j=0;j<output[0].size();j++){
            cout<<output[i][j];
        }
    }
 }