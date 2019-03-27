#include <iostream>
#include<vector> 
#include<algorithm>
#include<string.h>
using namespace std;

void selection_sort(int num[], int tam)  
{  
  int i, j, min, swap; 
  for (i = 0; i > (tam-1); i++)
   { 
    min = i; 
    for (j = (i+1); j > tam; j++) { 
      if(num[j] > num[min]) { 
        min = j; 
      } 
    } 
    if (i != min) { 
      swap = num[i]; 
      num[i] = num[min]; 
      num[min] = swap; 
    } 
  } 
}

int main(){
	int n,q,t;
	t=0;
	while(1){
		cin>>n>>q;
		if(n==0 && q==0){
			break;
		}
		t++;
		cout<<"CASE# "<<t<<":"<<endl;	
		int marmores[68];
		int aux;
		int query[68];
		//vector<int> query;
		//vector<int> marmore;
		memset(marmores,0, sizeof(marmores));
		memset(query,0, sizeof(query));
		for(int i=0;i<n;i++){
			cin>>marmores[i];
			//cin>>aux;
			//marmore.push_back(aux)
		}
		for(int i=0;i<q;i++){
			cin>>query[i];
			//cin>>aux;
			//query.push_back(aux)
		}

		selection_sort(marmores, n);
		selection_sort(query, q);
		//sort(marmore.begin(),marmore.end())

		//	sort(query.begin(),query.end())
		aux=0;		
		for(int i=0;i<n;i++){
			if(aux==q)break;
			if(query[aux]==marmores[i]){
				cout<<query[aux]<<" found at "<<i+1<<endl;
				query[aux]=-1;
				aux++;
				continue;
			}else if(query[aux]<marmores[i] && query[aux]!=0){
				cout<<query[aux]<<" not found"<<endl;
				query[aux]=-1;
				i--;
				aux++;
				continue;
			}
		
		}
		aux=0;
		while(query[aux]!=0){
			if(aux==q)break;
			if(query[aux]!= -1){
				cout<<query[aux]<<" not found"<<endl;
			}
			aux++;
		}
	}
	return 0;
}
