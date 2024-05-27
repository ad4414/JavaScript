/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
let getWeather=(cityCode)=>{
    myAxios({
    url:'http://hmajax.itheima.net/api/weather',
    params:{
        city:cityCode
    }
}).then((result)=>{
console.log(result.data);
document.querySelector('.area').innerHTML=result.data.area
const date=document.querySelector('.dateShort')
date.innerHTML=result.data.dateShort
document.querySelector('.dateLunar').innerHTML=result.data.dateLunar
document.querySelector('.temperature').innerHTML=result.data.temperature
document.querySelector('.psPm25').innerHTML=result.data.psPm25
document.querySelector('.psPm25Level').innerHTML=result.data.psPm25Level
document.querySelector('.weather').innerHTML=result.data.weather
document.querySelector('.windDirection').innerHTML=result.data.windDirection
document.querySelector('.windPower').innerHTML=result.data.windPower
 
document.querySelector('.sun-list').innerHTML=`<li>
<span>紫外线</span>
<span class="ultraviolet">${result.data.todayWeather.ultraviolet}</span>
</li>
<li>
<span>湿度</span>
<span class="humidity">${result.data.todayWeather.humidity}</span>%
</li>
<li>
<span>日出</span>
<span class="sunriseTime">${result.data.todayWeather.sunriseTime}</span>
</li>
<li>
<span>日落</span>
<span class="sunsetTime">${result.data.todayWeather.sunsetTime}</span>
</li>`
document.querySelector('.range-box').innerHTML=` <span>今天：</span>
<span class="range">
  <span class="weather">${result.data.todayWeather.weather}</span>
  <span class="temNight">${result.data.todayWeather.temNight}</span>
  <span>-</span>
  <span class="temDay">${result.data.todayWeather.temDay}</span>
  <span>℃</span>
</span>`
let weatherDay=result.data.dayForecast.map((ele)=>`<li class="item">
 <div class="date-box">
<span class="dateFormat">${ele.dateFormat}</span>
<span class="date">${ele.date}</span>
</div>
<img src=" ${ele.weatherImg} " alt="" class="weatherImg">
<span class="weather">${ele.weather}</span>
<div class="temp">
<span class="temDay">${ele.temDay}</span>-
<span class="temNight">${ele.temNight}</span>
<span>℃</span>
</div>
<div class="wind">
<span class="windDirection">${ele.windDirection}</span>
<span class="windPower">;${ele.windPower}</span>
</div>
</li>`)
document.querySelector('.week-wrap').innerHTML= weatherDay

}).catch((err)=>{
console.log(err);
})
}
getWeather('110100')

document.querySelector('.search-city').addEventListener('input',(e)=>{
    console.log(e.target.value);
    myAxios({
        url:'http://hmajax.itheima.net/api/weather/city',
        params:{
            city:e.target.value
        }
    }).then((result)=>{
        console.log(result);
        const liStr=result.data.map((ele)=>{
            return `<li data-id="${ele.code}" class="city-item">${ele.name}</li>`
        }).join('')
         
        document.querySelector('.search-list').innerHTML=liStr
        document.querySelector('.search-list').addEventListener('click',(e)=>{
            
            getWeather(e.target.dataset.id)
        })
    })
})
 