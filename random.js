// [OneWeek]
function randomUnitDisk()
{
    var dot = function(a, b)
    {
        var k = 0;
        for (var i = 0; i < a.length; i++)
        {
            k += a[i]*b[i];
        }
        return k;
    }

    var p = [];
    do {
        p = [Math.random(), Math.random(), Math.random()].map(x => 2*x - 1);
    } while (dot(p, p) >= 1);
    return p;
}