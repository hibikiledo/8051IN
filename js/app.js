var arithmeticOps = JSON.parse('[{"instruction":"ADD","oprands":"A,Rn","description":"Add register to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":0},{"instruction":"ADD","oprands":"A,direct","description":"Add direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":1},{"instruction":"ADD","oprands":"A,@Ri","description":"Add indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":2},{"instruction":"ADD","oprands":"A,#data","description":"Add immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":3},{"instruction":"ADDC","oprands":"A,Rn","description":"Add register to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":4},{"instruction":"ADDC","oprands":"A,direct","description":"Add direct byte to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":2,"ID":5},{"instruction":"ADDC","oprands":"A,@Ri","description":"Add indirect RAM to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":6},{"instruction":"ADDC","oprands":"A,#data","description":"Add immediate data to Acc with Carry","oscillatorPeriod":12,"sizeInByte":2,"ID":7},{"instruction":"SUBB","oprands":"A,Rn","description":"Subtract Register from Acc with borrow","oscillatorPeriod":12,"sizeInByte":1,"ID":8},{"instruction":"SUBB","oprands":"A,direct","description":"Subtract direct byte from Acc with borrow","oscillatorPeriod":12,"sizeInByte":2,"ID":9},{"instruction":"SUBB","oprands":"A,@Ri","description":"Subtract indirect RAM from ACC with borrow","oscillatorPeriod":12,"sizeInByte":1,"ID":10},{"instruction":"SUBB","oprands":"A,#data","description":"Subtract immediate data from Acc with borrow","oscillatorPeriod":12,"sizeInByte":2,"ID":11},{"instruction":"INC","oprands":"A","description":"Increment Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":12},{"instruction":"INC","oprands":"Rn","description":"Increment register","oscillatorPeriod":12,"sizeInByte":1,"ID":13},{"instruction":"INC","oprands":"direct","description":"Increment direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":14},{"instruction":"INC","oprands":"@Ri","description":"Increment direct RAM","oscillatorPeriod":12,"sizeInByte":1,"ID":15},{"instruction":"DEC","oprands":"A","description":"Decrement Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":16},{"instruction":"DEC","oprands":"Rn","description":"Decrement Register","oscillatorPeriod":12,"sizeInByte":1,"ID":17},{"instruction":"DEC","oprands":"direct","description":"Decrement direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":18},{"instruction":"DEC","oprands":"@Ri","description":"Decrement indirect RAM","oscillatorPeriod":12,"sizeInByte":1,"ID":19},{"instruction":"INC","oprands":"DPTR","description":"Increment Data Pointer","oscillatorPeriod":24,"sizeInByte":1,"ID":20},{"instruction":"MUL","oprands":"AB","description":"Multiply A \u0026 B","oscillatorPeriod":48,"sizeInByte":1,"ID":21},{"instruction":"DIV","oprands":"AB","description":"Divide A by B","oscillatorPeriod":48,"sizeInByte":1,"ID":22},{"instruction":"DA","oprands":"A","description":"Decimal Adjust Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":23}]');

var datatransferOps = JSON.parse('[{"instruction":"MOV","oprands":"A,Rn","description":"Move register to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":0},{"instruction":"MOV","oprands":"A,direct","description":"Move direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":1},{"instruction":"MOV","oprands":"A,@Ri","description":"Move indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":2},{"instruction":"MOV","oprands":"A,#data","description":"Move immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":3},{"instruction":"MOV","oprands":"Rn,#data","description":"Move immediate data to register","oscillatorPeriod":12,"sizeInByte":2,"ID":4},{"instruction":"MOV","oprands":"direct,A","description":"Move Accumulator to direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":5},{"instruction":"MOV","oprands":"direct,Rn","description":"Move register to direct byte","oscillatorPeriod":24,"sizeInByte":2,"ID":6},{"instruction":"MOV","oprands":"direct, direct","description":"Move direct byte to direct","oscillatorPeriod":24,"sizeInByte":3,"ID":7},{"instruction":"MOV","oprands":"direct,@Ri","description":"Move indirectRAM to direct byte","oscillatorPeriod":24,"sizeInByte":2,"ID":8},{"instruction":"MOV","oprands":"direct,#data","description":"Move immediate data to direct byte","oscillatorPeriod":24,"sizeInByte":3,"ID":9},{"instruction":"MOV","oprands":"@Ri,A","description":"Move Accumulator to indirect RAM","oscillatorPeriod":12,"sizeInByte":1,"ID":10},{"instruction":"MOV","oprands":"@Ri,direct","description":"Move direct byte to indirect RAM","oscillatorPeriod":24,"sizeInByte":2,"ID":11},{"instruction":"MOV","oprands":"@Ri,#data","description":"Move immediate data to indirect RAM","oscillatorPeriod":12,"sizeInByte":2,"ID":12},{"instruction":"MOV","oprands":"DPTR,#data16","description":"Load Data Pointer with a 16-bit constant","oscillatorPeriod":24,"sizeInByte":3,"ID":13},{"instruction":"MOVC","oprands":"A,@A+DPTR","description":"Move Code byte relative to DPTR to Acc","oscillatorPeriod":24,"sizeInByte":1,"ID":14},{"instruction":"MOVC","oprands":"A,@A+PC","description":"Move Code byte relative to PC to Acc","oscillatorPeriod":24,"sizeInByte":1,"ID":15},{"instruction":"MOVX","oprands":"A,@Ri","description":"Move External RAM (8-bit add) to Acc","oscillatorPeriod":24,"sizeInByte":1,"ID":16},{"instruction":"MOVX","oprands":"A,@DPTR","description":"Move External RAM (16-bit add) to Acc","oscillatorPeriod":24,"sizeInByte":1,"ID":17},{"instruction":"MOVX","oprands":"@Ri,A","description":"Move Acc to External RAM (8-bit addr)","oscillatorPeriod":24,"sizeInByte":1,"ID":18},{"instruction":"MOVX","oprands":"@DPTR,A","description":"Move Acc to External RAM (16-bit addr)","oscillatorPeriod":24,"sizeInByte":1,"ID":19},{"instruction":"PUSH","oprands":"direct","description":"Push direct byte onto stack","oscillatorPeriod":24,"sizeInByte":2,"ID":20},{"instruction":"POP","oprands":"direct","description":"Pop direct byte onto stack","oscillatorPeriod":24,"sizeInByte":2,"ID":21},{"instruction":"XCH","oprands":"A,Rn","description":"Exchange register with Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":22},{"instruction":"XCH","oprands":"A,direct","description":"Exchange direct byte with Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":23},{"instruction":"XCH","oprands":"Ai,@Ri","description":"Exchange indirect RAM with Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":24},{"instruction":"XCHD","oprands":"A,@Ri","description":"Exchange low-order Digit indirect RAM with Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":25}]');

var logicalOps = JSON.parse('[{"instruction":"ANL","oprands":"A,Rn","description":"AND Register to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":0},{"instruction":"ANL","oprands":"A,direct","description":"AND direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":1},{"instruction":"ANL","oprands":"A,@Ri","description":"AND indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":2},{"instruction":"ANL","oprands":"A,#data","description":"AND immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":3},{"instruction":"ANL","oprands":"direct,A","description":"AND Accumulator to direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":4},{"instruction":"ANL","oprands":"direct,#data","description":"AND immediate data to direct byte","oscillatorPeriod":24,"sizeInByte":3,"ID":5},{"instruction":"ORL","oprands":"A,Rn","description":"OR register to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":6},{"instruction":"ORL","oprands":"A,direct","description":"OR direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":7},{"instruction":"ORL","oprands":"A,@Ri","description":"OR indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":8},{"instruction":"ORL","oprands":"A,#data","description":"OR immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":9},{"instruction":"ORL","oprands":"direct,A","description":"OR Accumulator to direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":10},{"instruction":"ORL","oprands":"direct,#data","description":"OR immediate data to direct byte","oscillatorPeriod":24,"sizeInByte":3,"ID":11},{"instruction":"XRL","oprands":"A,Rn","description":"Exclusive-OR register to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":12},{"instruction":"XRL","oprands":"A,direct","description":"Exclusive-OR direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":13},{"instruction":"XRL","oprands":"A,@Ri","description":"Exclusive-OR indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":14},{"instruction":"XRL","oprands":"A,#data","description":"Exclusive-OR immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2,"ID":15},{"instruction":"XRL","oprands":"direct,A","description":"Exclusive-OR Accumulator to direct byte","oscillatorPeriod":12,"sizeInByte":2,"ID":16},{"instruction":"XRL","oprands":"direct,#data","description":"Exclusive-OR immediate data to direct byte","oscillatorPeriod":24,"sizeInByte":3,"ID":17},{"instruction":"CLR","oprands":"A","description":"Clear Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":18},{"instruction":"CPL","oprands":"A","description":"Complement Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":19},{"instruction":"RL","oprands":"A","description":"Rotate Accumulator Left","oscillatorPeriod":12,"sizeInByte":1,"ID":20},{"instruction":"RLC","oprands":"A","description":"Rotate Accumulator Left through the Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":21},{"instruction":"RR","oprands":"A","description":"Rotate Accumulator Right","oscillatorPeriod":12,"sizeInByte":1,"ID":22},{"instruction":"RRC","oprands":"A","description":"Rotate Accumulator Right through the Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":23},{"instruction":"SWAP","oprands":"A","description":"Swap nibbles within the Accumulator","oscillatorPeriod":12,"sizeInByte":1,"ID":24}]');

var programbranchOps = JSON.parse('[{"instruction":"ACALL","oprands":"addr11","description":"Absolute Subroutine Call","oscillatorPeriod":24,"sizeInByte":2,"ID":0},{"instruction":"LCALL","oprands":"addr16","description":"Long Subroutine Call","oscillatorPeriod":24,"sizeInByte":3,"ID":1},{"instruction":"RET","oprands":"-","description":"Return from Subroutine","oscillatorPeriod":24,"sizeInByte":1,"ID":2},{"instruction":"RETI","oprands":"-","description":"Return from interrupt","oscillatorPeriod":24,"sizeInByte":1,"ID":3},{"instruction":"AJMP","oprands":"addr11","description":"Absolute Jump","oscillatorPeriod":24,"sizeInByte":2,"ID":4},{"instruction":"LJMP","oprands":"addr16","description":"Long Jump","oscillatorPeriod":24,"sizeInByte":3,"ID":5},{"instruction":"SJMP","oprands":"rel","description":"Short Jump (relative add)","oscillatorPeriod":24,"sizeInByte":2,"ID":6},{"instruction":"JMP","oprands":"@A+DPTR","description":"Jump indirect relative to the DPTR","oscillatorPeriod":24,"sizeInByte":1,"ID":7},{"instruction":"JZ","oprands":"rel","description":"Jump if Accumulator is Zero","oscillatorPeriod":24,"sizeInByte":2,"ID":8},{"instruction":"JNZ","oprands":"rel","description":"Jump if Accumulator is Not Zero","oscillatorPeriod":24,"sizeInByte":2,"ID":9},{"instruction":"CJNE","oprands":"A,direct,rel","description":"Compare direct byte to Acc and Jump if Not Equal","oscillatorPeriod":24,"sizeInByte":3,"ID":10},{"instruction":"CJNE","oprands":"A,#data,rel","description":"Compare immediate to Acc and Jump if Not Equal","oscillatorPeriod":24,"sizeInByte":3,"ID":11},{"instruction":"CJNE","oprands":"Rn,#data,rel","description":"Compare immediate to register and Jump if Not Equal","oscillatorPeriod":24,"sizeInByte":3,"ID":12},{"instruction":"CJNE","oprands":"@Ri,#data,rel","description":"Compare immediate to indirect and Jump if Not Equal","oscillatorPeriod":24,"sizeInByte":3,"ID":13},{"instruction":"DJNZ","oprands":"Rn,rel","description":"Decrement register and Jump if Not Zero","oscillatorPeriod":24,"sizeInByte":2,"ID":14},{"instruction":"DJNZ","oprands":"direct,rel","description":"Decrement direct byte and Jump if Not Zero","oscillatorPeriod":24,"sizeInByte":3,"ID":15},{"instruction":"NOP","oprands":"-","description":"No Operation","oscillatorPeriod":12,"sizeInByte":1,"ID":16}]');

var booleanVarOps = JSON.parse('[{"instruction":"CLR","oprands":"C","description":"Clear Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":0},{"instruction":"CLR","oprands":"bit","description":"Clear direct bit","oscillatorPeriod":12,"sizeInByte":2,"ID":1},{"instruction":"SETB","oprands":"C","description":"Set Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":2},{"instruction":"SETB","oprands":"bit","description":"Set direct bit","oscillatorPeriod":12,"sizeInByte":2,"ID":3},{"instruction":"CPL","oprands":"C","description":"Complement Carry","oscillatorPeriod":12,"sizeInByte":1,"ID":4},{"instruction":"CPL","oprands":"bit","description":"Complement direct bit","oscillatorPeriod":12,"sizeInByte":2,"ID":5},{"instruction":"ANL","oprands":"C,bit","description":"AND direct bit to carry","oscillatorPeriod":24,"sizeInByte":2,"ID":6},{"instruction":"ANL","oprands":"C,/bit","description":"AND complement of direct bit to Carry","oscillatorPeriod":24,"sizeInByte":2,"ID":7},{"instruction":"ORL","oprands":"C,bit","description":"OR direct bit to Carry","oscillatorPeriod":24,"sizeInByte":2,"ID":8},{"instruction":"ORL","oprands":"C,/bit","description":"OR complement of direct bit to Carry","oscillatorPeriod":24,"sizeInByte":2,"ID":9},{"instruction":"MOV","oprands":"C,bit","description":"Move direct bit to Carry","oscillatorPeriod":12,"sizeInByte":2,"ID":10},{"instruction":"MOV","oprands":"bit,C","description":"Move Carry to direct bit","oscillatorPeriod":24,"sizeInByte":2,"ID":11},{"instruction":"JC","oprands":"rel","description":"Jump if Carry is set","oscillatorPeriod":24,"sizeInByte":2,"ID":12},{"instruction":"JNC","oprands":"rel","description":"Jump if Carry not set","oscillatorPeriod":24,"sizeInByte":2,"ID":13},{"instruction":"JB","oprands":"bit.rel","description":"Jump if direct bit set","oscillatorPeriod":24,"sizeInByte":3,"ID":14},{"instruction":"JNB","oprands":"bit,rel","description":"Jump if direct Bit is Not set","oscillatorPeriod":24,"sizeInByte":3,"ID":15},{"instruction":"JBC","oprands":"bit,rel","description":"Jump if direct bit is set \u0026 clear bit","oscillatorPeriod":24,"sizeInByte":3,"ID":16}]');

// Create index instance
var arithmeticIndex = lunr( function() {
    this.field('inst')
    this.ref('id')
});
arithmeticOps.forEach(function( obj ) {
    arithmeticIndex.add({
        id: obj.ID,
        inst: obj.instruction
    }); 
});

var datatransferIndex = lunr( function() {
    this.field('inst')
    this.ref('id')
});
datatransferOps.forEach(function( obj ) {
    datatransferIndex.add({
        id: obj.ID,
        inst: obj.instruction
    }); 
});

var logicalIndex = lunr( function() {
    this.field('inst')
    this.ref('id')
});
logicalOps.forEach(function( obj ) {
    logicalIndex.add({
        id: obj.ID,
        inst: obj.instruction
    }); 
});

var programbranchIndex = lunr( function() {
    this.field('inst')
    this.ref('id')
});
programbranchOps.forEach(function( obj ) {
    programbranchIndex.add({
        id: obj.ID,
        inst: obj.instruction
    }); 
});

var booleanvarIndex = lunr( function() {
    this.field('inst')
    this.ref('id')
});
booleanVarOps.forEach(function( obj ) {
    booleanvarIndex.add({
        id: obj.ID,
        inst: obj.instruction
    }); 
});

//------------------------------------------------------------------------------------------------------
//  Table Initialization
//------------------------------------------------------------------------------------------------------

function craftTableRow(inst, oprand, des, byte, oscPeriod, id) {
    var trElement = $('<tr>');
    trElement.attr('refid', id);
    trElement.append($('<td>').text(inst));
    trElement.append($('<td>').text(oprand));
    trElement.append($('<td>').text(des));
    trElement.append($('<td>').text(byte));
    trElement.append($('<td>').text(oscPeriod));
    
    return trElement;
}

// Add Arithmetic instruction into table
var arith_inst = $('#arith_inst');
arithmeticOps.forEach( function( inst ) {
    arith_inst.append( craftTableRow( 
        inst.instruction,
        inst.oprands,
        inst.description,
        inst.sizeInByte,
        inst.oscillatorPeriod,
        inst.ID
    ));
});

var data_inst = $('#data_inst');
datatransferOps.forEach( function( inst ) {
    data_inst.append( craftTableRow(
        inst.instruction,
        inst.oprands,
        inst.description,
        inst.sizeInByte,
        inst.oscillatorPeriod,
        inst.ID   
    ));
});

var logical_inst = $('#logical_inst');
logicalOps.forEach( function( inst ) {
    logical_inst.append( craftTableRow(
        inst.instruction,
        inst.oprands,
        inst.description,
        inst.sizeInByte,
        inst.oscillatorPeriod,
        inst.ID
    ));
});

var probranch_inst = $('#probranch_inst');
programbranchOps.forEach( function( inst ) {
    probranch_inst.append( craftTableRow(
        inst.instruction,
        inst.oprands,
        inst.description,
        inst.sizeInByte,
        inst.oscillatorPeriod,
        inst.ID
    ));
});

var booleanvar_inst = $('#booleanvar_inst');
booleanVarOps.forEach( function( inst ) {
    booleanvar_inst.append( craftTableRow(
        inst.instruction,
        inst.oprands,
        inst.description,
        inst.sizeInByte,
        inst.oscillatorPeriod,
        inst.ID
    ));
});

//------------------------------------------------------------------------------------------------------
//  Implement Searching
//------------------------------------------------------------------------------------------------------

// Retrieve form related element
var searchBtn = $('#searchBtn');
var inputField = $('#inputField');

// retrieve tables
var arithTable = $('#arith_table');
var logicalTable = $('#logical_table');
var dataTable = $('#data_table');
var booleanvarTable = $('#booleanvar_table');
var probranchTable = $('#probranch_table');

var systemMsg = $('#system-msg');


// Implement event handler for search button
searchBtn.click(function(e) {
   handleSearchEvent(e);    
});

inputField.keypress(function(e) {
    // check for enter key press
    if( e.which == 13 ) {
        handleSearchEvent(e);   
    }
});

function handleSearchEvent( e ) {
     e.preventDefault();
    
    var query = inputField.val();
    
    if( query.length > 0 ) {
        hideAllTableAndData();
        var found = updateTables( query );
        
        if(!found) {
            systemMsg.text('The instruction "' + query + '" does NOT exist.');
            systemMsg.fadeIn();
        } else {
            systemMsg.hide();   
        }
        
    } else {
        showAllTableAndData();  
    }   
}

function hideAllTableAndData() {
    // hide arith table
    arithTable.hide();
    arith_inst.children().hide();
    
    // hide logical table
    logicalTable.hide();
    logical_inst.children().hide();
    
    // hide data table
    dataTable.hide();
    data_inst.children().hide();
    
    // hide boolean var table
    booleanvarTable.hide();
    booleanvar_inst.children().hide();
    
    // hide program branch table
    probranchTable.hide();
    probranch_inst.children().hide();    
}

function showAllTableAndData() {
    
    // hide system message
    systemMsg.hide();
    
    // show elements
    arith_inst.children().show();
    logical_inst.children().show();
    data_inst.children().show();
    booleanvar_inst.children().show();
    probranch_inst.children().show(); 
    
    // show tables
    arithTable.fadeIn();
    logicalTable.fadeIn();
    dataTable.fadeIn();
    booleanvarTable.fadeIn();
    probranchTable.fadeIn();
     
}

function updateTables( query ) {
    
    var isFound = false;
    
    // Handler for arithmetic table
    var matchedResult = arithmeticIndex.search( query );
    console.log( matchedResult );
    
    // result available in arithmetic table
    if( matchedResult.length != 0 ) {        
        var data = arith_inst.children();   
        // show matched instruction
        matchedResult.forEach(function(obj) {
            $(data[ obj.ref ]).show();         
        });
        // show table
        arithTable.fadeIn();
        
        isFound = true;
    }
    
    //-----------------------------------------------------
    
    // Handler for arithmetic table
    var matchedResult = logicalIndex.search( query );
    console.log( matchedResult );
    
    // result available in arithmetic table
    if( matchedResult.length != 0 ) {
        var data = logical_inst.children();   
        // show matched instruction
        matchedResult.forEach(function(obj) {
            $(data[ obj.ref ]).show();         
        });
        // show table
        logicalTable.fadeIn();
        
        isFound = true;
    }
    
    //-----------------------------------------------------
    
    // Handler for data table
    var matchedResult = datatransferIndex.search( query );
    console.log( matchedResult );
    
    // result available in arithmetic table
    if( matchedResult.length != 0 ) {
        var data = data_inst.children();   
        // show matched instruction
        matchedResult.forEach(function(obj) {
            $(data[ obj.ref ]).show();         
        });
        // show table
        dataTable.fadeIn();
        
        isFound = true;
    }
    
    //-----------------------------------------------------
    
    // Handler for boolean var table
    var matchedResult = booleanvarIndex.search( query );
    console.log( matchedResult );
    
    // result available in arithmetic table
    if( matchedResult.length != 0 ) {
        var data = booleanvar_inst.children();   
        // show matched instruction
        matchedResult.forEach(function(obj) {
            $(data[ obj.ref ]).show();         
        });
        // show table
        booleanvarTable.fadeIn();
        
        isFound = true;
    }
    
    //-----------------------------------------------------
    
    // Handler for program branch table
    var matchedResult = programbranchIndex.search( query );
    console.log( matchedResult );
    
    // result available in arithmetic table
    if( matchedResult.length != 0 ) {
        var data = probranch_inst.children();   
        // show matched instruction
        matchedResult.forEach(function(obj) {
            $(data[ obj.ref ]).show();         
        });
        // show table
        probranchTable.fadeIn();
        
        isFound = true;
    }    
    
    return isFound;
    
}

//------------------------------------------------------------------------------------------------------
//  Implement Scrolling
//------------------------------------------------------------------------------------------------------

function viewSpecificTable( table ) {
    hideAllTableAndData();
    
    switch( table.attr('id') )
    {
        case 'arith_table': 
            arith_inst.children().show();       
            break;
        case 'logical_table': 
            logical_inst.children().show();    
            break;
        case 'data_table': 
            data_inst.children().show(); 
            break;
        case 'booleanvar_table': 
            booleanvar_inst.children().show(); 
            break;
        case 'probranch_table': 
            probranch_inst.children().show(); 
            break;
    }
    
    table.fadeIn();    
}

$('#arith_grp').click(function(e) {
    e.preventDefault();    
    viewSpecificTable( arithTable );
});

$('#logical_grp').click(function(e) {
    e.preventDefault();
    viewSpecificTable( logicalTable );
});

$('#data_grp').click(function(e) {
    e.preventDefault();
    viewSpecificTable( dataTable );
});

$('#booleanvar_grp').click(function(e) {
    e.preventDefault();
    viewSpecificTable( booleanvarTable );
});

$('#probranch_grp').click(function(e) {
    e.preventDefault();
    viewSpecificTable( probranchTable );
});

$('#all_grp').click(function(e) {
    e.preventDefault();
    showAllTableAndData();
});


