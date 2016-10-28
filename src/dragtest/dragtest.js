format.extend(String.prototype);

$(function() {
//     $( "#draggable" )
  addContent();
  $( ".draggable" ).draggable({
      revert: false,
      helper: "clone",
      opacity: 0.85,
      handle:$(this).find('.draghandle')
  });

  $( ".droppable" ).droppable({
    drop: function( event, ui ) {
      // $( this ).addClass( "ui-state-highlight" );
    },
    over: function (event, ui) {
      ui.draggable.appendTo($(this).find('.contentlayout:first'));
    }
  });

  $(".sortable").sortable({
    handle:$(this).find('.sorthandle')
  });
});

function addContent() {
  var template = `<div class="base-content draggable droppable">
                    <div class="headlayout">
                      <ul class="labelcontent">
                        <li>label</li>
                        <li class="sorthandle">排序</li>
                        <li class="draghandle">拖动</li>
                      </ul>
                    </div>
                    <div class="clearfloat"></div>
                    <div class="contentlayout sortable">
                      <p>{0}请把我拖拽到目标处！</p>
                    </div>
                  </div>
                `;
  var html = [];
  for(let i = 0; i<5; i++){
    var tem = template.format(i);
    html.push(tem);
  }
  var content = document.getElementById('content');
  content.innerHTML = html.join('');
}
