<template>
  <div>
    <ContentWrapper>
      <div v-if="getAddress" class="container w-11/12 m-auto text-center">
        <Title>{{ getAddress.title }}</Title>
        <!-- <p class="md:text-lg">8/18、19兩天  尊榮峰會</p> -->
        <!-- <p class="mb-3 md:text-lg">原價20,000 <span class="text-red">回饋讀者  免費收看</span></p> -->
        <!-- <p class="text-lg md:text-2xl">敬 請 期 待</p> -->

        <!-- 得獎公告 -->
        <h4 class="text-lg md:text-2xl pb-8 text-center">2021 台灣大未來 國際高峰會 中獎名單＆領獎辦法</h4>
        <div class="max-w-1366 mx-auto">
          <div class="md:px-1/20">
            <h5 class="text-red mb-2 text-left">【中獎名單】</h5>
            <table class="w-full mb-4 md:mb-8">
              <thead>
                <tr>
                  <th>獎項</th>
                  <th>名額數</th>
                  <th>項次</th>
                  <th>得獎者</th>
                  <th>手機後三碼</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>飛利浦 全自動義式咖啡機</td>
                  <td>一名</td>
                  <td>1</td>
                  <td>呂x明</td>
                  <td>812</td>
                </tr>
                <tr>
                  <td rowspan="20">裕元花園酒店 商務客房</td>
                  <td rowspan="20">二十名</td>
                  <td>2</td>
                  <td>李x潔</td>
                  <td>390</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>黃x蘭</td>
                  <td>961</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>余x福</td>
                  <td>711</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>陳x民</td>
                  <td>415</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Helen</td>
                  <td>931</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>李x卉</td>
                  <td>525</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>梁x予</td>
                  <td>202</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>王x鳳</td>
                  <td>146</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>林x如</td>
                  <td>751</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>王x甯</td>
                  <td>632</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>邱x威</td>
                  <td>875</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>陳x心</td>
                  <td>908</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>劉x一</td>
                  <td>033</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>吳x雍</td>
                  <td>824</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>楊x棋</td>
                  <td>056</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>黃x琪</td>
                  <td>044</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>黃x豪</td>
                  <td>338</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>張x嘉</td>
                  <td>636</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>朱x懷</td>
                  <td>731</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>盧x展</td>
                  <td>623</td>
                </tr>
                <tr>
                  <td rowspan="10">六福莊-剛果藍天房</td>
                  <td rowspan="10">十名</td>
                  <td>22</td>
                  <td>陳x呈</td>
                  <td>823</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>鄭x珮</td>
                  <td>011</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>張x鴻</td>
                  <td>413</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>吳x亭</td>
                  <td>326</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>黃x君</td>
                  <td>560</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>張x倫</td>
                  <td>678</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>王x蔚</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Ken Chen</td>
                  <td>961</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>郭x賦</td>
                  <td>442</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>劉x琪</td>
                  <td>422</td>
                </tr>
                <tr>
                  <td rowspan="20">黃金紀念美鈔</td>
                  <td rowspan="20">二十名</td>
                  <td>32</td>
                  <td>蔡x筑</td>
                  <td>525</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>邱x菁</td>
                  <td>808</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>陳x琦</td>
                  <td>178</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>胡x菱</td>
                  <td>612</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>鄭x明</td>
                  <td>671</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>張x穎</td>
                  <td>033</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Kelly</td>
                  <td>047</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>陳x文</td>
                  <td>960</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>陳x華</td>
                  <td>051</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>曾x仁</td>
                  <td>351</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>邱x珍</td>
                  <td>481</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>陳x如</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>陳x睿</td>
                  <td>153</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>齊x君</td>
                  <td>882</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>陳x霙</td>
                  <td>419</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>劉x瑋</td>
                  <td>238</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>林x容</td>
                  <td>038</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>游x修</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>黃x文</td>
                  <td>747</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>曹x熙</td>
                  <td>991</td>
                </tr>
                <tr>
                  <td rowspan="20">陽明生醫—家人益生菌</td>
                  <td rowspan="20">二十名</td>
                  <td>52</td>
                  <td>廖x祥</td>
                  <td>963</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>鄭x圻</td>
                  <td>991</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>駱x翰</td>
                  <td>419</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>楊x升</td>
                  <td>653</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>夏x寧</td>
                  <td>392</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>蘇x淞</td>
                  <td>311</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>黃x安</td>
                  <td>265</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>陳x穎</td>
                  <td>388</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>楊x亮</td>
                  <td>403</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>鐘x嘉</td>
                  <td>286</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Ya-hui Chien</td>
                  <td>662</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>史x安</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>傅x光</td>
                  <td>817</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>黃x仁</td>
                  <td>775</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>許x榮</td>
                  <td>615</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>周x陞</td>
                  <td>856</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>傅x枝</td>
                  <td>289</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>黃x蘭</td>
                  <td>608</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>林x宇</td>
                  <td>107</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>張x瑰</td>
                  <td>770</td>
                </tr>
                <tr>
                  <td rowspan="19">KOR water 水瓶-DEVI不鏽鋼保冷保溫瓶</td>
                  <td rowspan="19">十九名</td>
                  <td>72</td>
                  <td>高x娥</td>
                  <td>351</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>殷x</td>
                  <td>122</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>林x霞</td>
                  <td>335</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>郭x浤</td>
                  <td>851</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>呂x誠</td>
                  <td>956</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>高x婷</td>
                  <td>351</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>鄒x群</td>
                  <td>028</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Maggie Chen</td>
                  <td>385</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>杜x甫</td>
                  <td>593</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>張x芳</td>
                  <td>890</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>吳x翰</td>
                  <td>833</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>陳x盛</td>
                  <td>190</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>簡x正</td>
                  <td>809</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Vanness Cheng</td>
                  <td>519</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>簡x莉</td>
                  <td>334</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>王x誠</td>
                  <td>256</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>王x芬</td>
                  <td>873</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>金x坤</td>
                  <td>135</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>盧x旭</td>
                  <td>911</td>
                </tr>
                <tr>
                  <td rowspan="10">飛利浦 美式咖啡壺</td>
                  <td rowspan="10">十名</td>
                  <td>91</td>
                  <td>曾x弘</td>
                  <td>388</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>戴x辰</td>
                  <td>821</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Judy yang</td>
                  <td>556</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>林x欣</td>
                  <td>793</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>范x溱</td>
                  <td>850</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>曾x英</td>
                  <td>878</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>羅x議</td>
                  <td>629</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>王x紜</td>
                  <td>325</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>徐x方</td>
                  <td>937</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>丁x殷</td>
                  <td>030</td>
                </tr>
              </tbody>
            </table>
            <h5 class="text-red mb-2 text-left">【領獎辦法】</h5>
            <ol class="pl-5 mb-8 text-left">
              <li class="mb-2 list-decimal">中獎者收到《今周刊》簡訊及E-mail【中獎通知單】後，請務必完整填寫通知單上資料，並附上身分證正反面影本，於 2021/8/31(二)前，一律以〈掛號郵寄〉〈郵戳為憑〉至104408台北市南京東路一段96號8樓「2021台灣大未來 專案團隊收」。若超過期限或資料填寫不完整者，將視同放棄且喪失得獎資格，主辦單位不另行通知。</li>
              <li class="mb-2 list-decimal">主辦單位將於 2021/9/30(四)前寄出全部得獎獎品。</li>
              <li class="mb-2 list-decimal">每人限一次得獎，若該獎項超過新台幣1,000元(含)以上者，將依法申報得獎人所得；獎項金額為新台幣20,000元(含)以上者，得獎者須先繳交【10%機會中獎稅金】，始可領獎；外籍人士不限中獎金額，一律代扣繳20%稅款。若未繳交，視同放棄獎項。</li>
              <li class="mb-2 list-decimal">本活動獎項寄送地點僅限台灣本島，不含澎湖、金門、馬祖等附屬列島。</li>
              <li class="mb-2 list-decimal">主辦單位《今周刊》保有取消、終止、修改或暫停本活動相關內容之權利，如有未盡事宜，悉依本公司相關規定或解釋辦理，並得隨時補充公告於活動官網。</li>
            </ol>
          </div>
        </div>
      </div>

      <!-- media -->
      <div v-if="getVideo" class="overflow-hidden">
        <div class="container w-11/12 m-auto text-center">
          <div class="max-w-1366 mx-auto">
            <div
              v-for="list in getVideo.list"
              :key="list.index"
              class="px-1/20"
            >
              <h4 class="text-lg md:text-2xl mt-8 mb-4">{{ list.title }}</h4>
              <div class="relative pb-mediabox">
                <YoutubePlayer
                  :videoId="list.youtubeID"
                  :active="activeVideo"
                  v-on:setActiveVideo="setActiveVideo"
                  class="absolute w-full h-full top-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>

    <!-- 贈品
    <ContentWrapper :setBackground="{type: 'fixed', value: backgroundImage}">
      <div class="container w-11/12 m-auto">
        <h4 class="text-lg md:text-2xl pb-8 text-center">2021 台灣大未來 國際高峰會 線上論壇參加＆抽獎辦法</h4>
        <article class="px-1/20">
          <h5 class="text-red mb-2">【參加辦法】</h5>
          <p class="mb-2">於 8/18(三)-8/19(四)高峰會線上直播進行時，完成以下兩個步驟，即可參加抽獎，共100份超值好禮回饋：</p>
          <ol class="pl-5 mb-8">
            <li class="mb-2 list-decimal">直播進行期間，分享直播影片至個人FB，並 ＠2位朋友</li>
            <li class="mb-2 list-decimal">填寫表單問卷並回傳 <a class="text-red underline" href="https://reurl.cc/oga4zl" target="_blank">https://reurl.cc/oga4zl</a></li>
          </ol>
          <h5 class="text-red mb-2">【抽獎辦法】</h5>
          <ol class="pl-5 mb-8">
            <li class="mb-2 list-decimal">將於兩天活動結束後，以電腦抽獎系統採隨機方式抽出，於2021/8/24(二)公布於本活動網站。</li>
            <li class="mb-2 list-decimal">中獎者收到【中獎通知單】後，請務必完整填寫通知單上資料，並附上身分證正反面影本，於 2021/8/31(二)前，一律以〈掛號郵寄〉〈郵戳為憑〉至104408台北市南京東路一段96號8樓「2021台灣大未來 專案團隊收」。若超過期限或資料填寫不完整者，將視同放棄且喪失得獎資格，主辦單位不另行通知。</li>
            <li class="mb-2 list-decimal">主辦單位將於 2021/9/30(四)前寄出全部得獎獎品。</li>
            <li class="mb-2 list-decimal">每人限一次得獎，若該獎項超過新台幣1,000元(含)以上者，將依法申報得獎人所得；獎項金額為新台幣20,000元(含)以上者，得獎者須先繳交【10%機會中獎稅金】，始可領獎；外籍人士不限中獎金額，一律代扣繳20%稅款。若未繳交，視同放棄獎項。</li>
            <li class="mb-2 list-decimal">本活動獎項寄送地點僅限台灣本島，不含澎湖、金門、馬祖等附屬列島。</li>
            <li class="mb-2 list-decimal">主辦單位《今周刊》保有取消、終止、修改或暫停本活動相關內容之權利，如有未盡事宜，悉依本公司相關規定或解釋辦理，並得隨時補充公告於活動官網。</li>
          </ol>
          <h5 class="text-red">【抽獎禮物】 <span class="text-sm text-gray">（照片皆為示意）</span></h5>
        </article>
        <ul class="flex flex-wrap">
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents01.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">飛利浦 全自動義式咖啡機</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$36,900</div>
                <div class="text-lg xl:text-xl tracking-normal">共1名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents02.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">裕元花園酒店 商務客房</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$14,080</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents03.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">六福莊－剛果藍天房</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$11,500</div>
                <div class="text-lg xl:text-xl tracking-normal">共10名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents04.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">黃金紀念美鈔</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$3,500</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents05.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">陽明生醫一家人益生菌</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$2,150</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents06.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">KOR water-不鏽鋼保冷保溫瓶</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$1,480</div>
                <div class="text-lg xl:text-xl tracking-normal">共19名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents07.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">飛利浦 美式咖啡壺</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$1,390</div>
                <div class="text-lg xl:text-xl tracking-normal">共10名</div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </ContentWrapper>
    -->
  </div>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import Title from './models/Title'
import YoutubePlayer from './YoutubePlayer'

import backgroundImage from '../assets/images/background.png'

export default {
  name: 'Address',
  components: {
    ContentWrapper,
    Title,
    YoutubePlayer,
  },
  data() {
    return {
      backgroundImage,
      activeVideo: '' // 當前播放中的影片ID
    }
  },
  computed: {
    getAddress() {
      return this.$store.state.indexData.address;
    },
    getVideo() {
      return this.$store.state.indexData.video;
    },
  },
  methods: {
    setActiveVideo(id) {
      this.activeVideo = id;
    }
  }
}
</script>

<style>
#activity thead th {
  color: white;
  background: #641516;
}
#activity th, #activity td {
  padding: 0.2rem 0.4rem;
  border: solid 1px #ccc;
  border-collapse: collapse;
}
</style>
