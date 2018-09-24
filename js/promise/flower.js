$(function() {
        var snowflakeURl = []
        //绿叶，代表我对她一见钟情，她对我无限崇拜
        var pinkList=[]
        for (var i=1;i<=33;i++) {
        	var image_path='./images/pink/pink'+i+'.png'
        	pinkList.push(image_path)
        }
        //绿叶，代表我对她一见钟情，她对我无限崇拜
        var greenList=[]
        for (var i=1;i<=8;i++) {
        	var image_path='./images/green/green'+i+'.png'
        	greenList.push(image_path)
        }
        //蓝色花瓣
        var blueList=[]
        for (var i=1;i<=48;i++) {
        	var image_path='./images/blue/blue'+i+'.png'
        	blueList.push(image_path)
        }
        //紫色花瓣
        var purpleList=[]
        for (var i=1;i<=13;i++) {
        	var image_path='./images/purple/purple'+i+'.png'
        	purpleList.push(image_path)
        }
        //红色花瓣
        var redList=[]
        for (var i=1;i<=8;i++) {
        	var image_path='./images/red/red'+i+'.png'
        	redList.push(image_path)
        }
        snowflakeURl=pinkList
//      snowflakeURl=greenList
//      snowflakeURl=purpleList
//      snowflakeURl=blueList
//      snowflakeURl=redList
//      alert(snowflakeURl)
//      snowflakeURl.add()
        var container = $("#content");
           visualWidth = container.width();
           visualHeight = container.height();
    　　//获取content的宽高
        function snowflake() {
            // 雪花容器
            var $flakeContainer = $('#snowflake');
    　　　　　　
            // 随机六张图
            function getImagesName() {
                return snowflakeURl[[Math.floor(Math.random() * snowflakeURl.length)]];
            }
            // 创建一个雪花元素
            function createSnowBox() {
                var url = getImagesName();
                return $('<div class="snowbox" />').css({
                    'width': 25,
                    'height': 26,
                    'position': 'absolute',
                    'backgroundRepeat':'no-repeat',
                    'zIndex': 100000,
                    'top': '-41px',
                    'backgroundImage': 'url(' + url + ')'
                }).addClass('snowRoll');
            }
            function flowrStart(){
                // 运动的轨迹
                var startPositionLeft = Math.random() * visualWidth - 100,
                    startOpacity    = 1,
                    endPositionTop  = visualHeight - 40,
                    endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                    duration        = visualHeight * 10 + Math.random() * 5000;
                // 随机透明度，不小于0.5
                var randomStart = Math.random();
                randomStart = randomStart < 0.5 ? startOpacity : randomStart;
                // 创建一个雪花
                var $flake = createSnowBox();
                // 设计起点位置
                $flake.css({
                    left: startPositionLeft,
                    opacity : randomStart
                });
                // 加入到容器
                $flakeContainer.append($flake);
                // 开始执行动画
                $flake.transition({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.7
                }, duration, 'ease-out', function() {
                    $(this).remove() //结束后删除
                });
            }
            // 开始飘花
            flowr_start=setInterval(flowrStart, 500);
        }
        var modal = document.getElementById('modal-4')
        setTimeout(function(){
	        classie.add( modal, 'md-show');
    	},500)
        $('#start_btn').click(function(){
        	$('#promise_image').css({
        	'opacity':'1'
        })
        promise_image()
        classie.remove( modal, 'md-show');
        //我对她一见钟情，她对我无限崇拜,初识，粉色
       snowflake()
        //偶然的开始，萌芽，绿色
        setTimeout(function(){
         	clearInterval(flowr_start)
        },30000)
        setTimeout(function(){
         	snowflakeURl=greenList
         	snowflake()
        },31200)
        //许下了约定，守约，蓝色
        setTimeout(function(){
         	clearInterval(flowr_start)
        },50000)
        setTimeout(function(){
         	snowflakeURl=blueList
         	snowflake()
        },51200)
        //第一段结束
        setTimeout(function(){
         	clearInterval(flowr_start)
        },108000)
        //第二段节奏，陌生到了解，相知，紫色
        setTimeout(function(){
         	snowflakeURl=purpleList
         	snowflake()
        },111500)
        //简单的相恋，相恋，红色
        setTimeout(function(){
         	clearInterval(flowr_start)
         	snowflakeURl=redList
         	snowflake()
        },170000)
        
        
        var audio = document.getElementById("promise");
        setTimeout(function(){
       	audio.play()
            },500)
        })
        
    })
	
	