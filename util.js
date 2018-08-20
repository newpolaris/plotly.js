function test(numSamples, sampling)
{
    var list = [];
    for (var i = 0; i < numSamples; i++)
    {
        var r1 = Math.random();
        var r2 = Math.random();
        list.push(sampling(r1, r2));
    }
    return list;
}

function getElement(list, idx)
{
    var l = [];
    for (var i = 0; i < list.length; i++)
    {
        var element = list[i];
        l.push(element[idx]);
    }
    return l;
}


function scatter3d(samplingMethod, color, numSamples)
{
    var SamplingResult = test(numSamples, samplingMethod);
    var trace = {
        x: getElement(SamplingResult, 0),
        y: getElement(SamplingResult, 1),
        z: getElement(SamplingResult, 2),
        mode: 'markers',
        marker: {
            size: 8,
            line: {
                color: color,
                width: 0.5
            },
            opacity: 0.2
        },
        type: 'scatter3d'
    };
    return trace;
}

